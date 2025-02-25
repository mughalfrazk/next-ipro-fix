"use client"; // Error boundaries must be Client Components

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  IconChevronLeft,
  IconFingerprintOff,
  IconLockOff,
  IconServerSpark
} from "@tabler/icons-react";
import { Group, rem, RingProgress, Stack, Text, Title } from "@mantine/core";

import IproButton from "@/components/core/IproButton";
import { getFormattedError } from "@/utils/format-error";

const ErrorDescription = {
  401: {
    icon: <IconLockOff style={{ height: rem(130), width: rem(130), marginBottom: rem(20) }} />,
    title: "Session Ended!",
    description: "Please login again, you are being refirected in"
  },
  403: {
    icon: (
      <IconFingerprintOff style={{ height: rem(130), width: rem(130), marginBottom: rem(20) }} />
    ),
    title: "Forbidden Exception!",
    description: "You are not authorized to access this page."
  },
  500: {
    icon: <IconServerSpark style={{ height: rem(130), width: rem(130), marginBottom: rem(20) }} />,
    title: "Server Exception!",
    description: "Something went wrong, please try again."
  }
};

export default function Error({
  error
}: {
  error?: Error & { digest?: string };
  reset?: () => void;
}) {
  const router = useRouter();
  const [statusCode, setStatusCode] = useState<number>(500);
  const [errorText, setErrorText] = useState<string>("");
  const [timer, setTimer] = useState<number>(5);

  const goToLogin = () => {
    router.push("/auth");
  };

  useEffect(() => {
    console.log("ERROR: ", error);
  }, [error]);

  useEffect(() => {
    if (!error) return;

    const errorText = getFormattedError(error).errors.formErrors?.[0];
    setErrorText(errorText ?? "");
    if (!errorText) {
      setStatusCode(500);
      return;
    }

    const splittedErrorText = errorText?.split(" ");
    const errorCode = Number(splittedErrorText[splittedErrorText?.length - 1]);
    setStatusCode(!!errorCode ? errorCode : 500);
  }, [error]);

  useEffect(() => {
    if (statusCode !== 401) return;

    if (timer > 0) {
      const timerInterval = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearInterval(timerInterval);
    } else {
      goToLogin();
    }
  }, [statusCode, timer]);

  if (!statusCode) {
    return <Text>This is the error: {errorText}</Text>;
  }

  return (
    <Stack justify="center" align="center" h="100vh" gap={0}>
      {ErrorDescription[statusCode as keyof typeof ErrorDescription].icon}
      <Title order={2}>{ErrorDescription[statusCode as keyof typeof ErrorDescription].title}</Title>
      <Text>{ErrorDescription[statusCode as keyof typeof ErrorDescription].description}</Text>
      {statusCode === 401 && (
        <RingProgress
          mt={20}
          sections={[{ value: timer * 20, color: "primary.6" }]}
          label={
            <Text c="primary.6" fw={700} ta="center" size="xl">
              {timer}s
            </Text>
          }
        />
      )}
      <Group mt={20}>
        {statusCode === 401 ? (
          <IproButton variant="outline" onClick={goToLogin}>
            Go to Login
          </IproButton>
        ) : (
          <>
            <IproButton
              variant="outline"
              onClick={() => router.back()}
              leftSection={<IconChevronLeft />}
            >
              Go Back
            </IproButton>
          </>
        )}
      </Group>
    </Stack>
  );
}
