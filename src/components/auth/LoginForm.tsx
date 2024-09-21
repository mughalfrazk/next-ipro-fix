"use client";

import { Group, Anchor, Paper } from "@mantine/core";
import { useFormState } from "react-dom";

import { loginAction } from "@/lib/actions/auth.action";
import IproTextInput from "../core/IproTextInput";
import IproButton from "../core/IproButton";
import { useActionErrors } from "@/hooks/use-action-errors";
import { getSession } from "next-auth/react";

const LoginForm = () => {
  const [state, formAction] = useFormState(loginAction, {});
  const { getFieldErrorProps } = useActionErrors(state);

  return (
    <form action={formAction}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <IproTextInput
          type="text"
          label="Email address"
          name="email"
          placeholder="hello@gmail.com"
          size="md"
          {...getFieldErrorProps("email")}
        />
        <IproTextInput
          type="password"
          label="Password"
          name="password"
          placeholder="Your password"
          mt="md"
          size="md"
          {...getFieldErrorProps("password")}
        />
        <Group justify="flex-end" mt="lg">
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <IproButton mt={10} fullWidth isSubmit={true}>
          Submit
        </IproButton>
      </Paper>
    </form>
  );
};

export default LoginForm;
