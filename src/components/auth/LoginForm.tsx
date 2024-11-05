"use client";

import { Group, Anchor } from "@mantine/core";

import { useFormAction } from "@/hooks/use-form-action";
import { loginAction } from "@/lib/actions/auth.action";
import IproTextInput from "../core/IproTextInput";
import IproButton from "../core/IproButton";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const { formAction, getFieldErrorProps } = useFormAction(loginAction, {});

  return (
    <form action={formAction}>
      <IproTextInput
        type="text"
        name="email"
        size="md"
        placeholder="Email"
        {...getFieldErrorProps("email")}
        classNames={classes}
        styles={{ input: { backgroundColor: "transparent", color: "white" } }}
      />
      <IproTextInput
        type="password"
        name="password"
        placeholder="Password"
        size="md"
        mt="md"
        {...getFieldErrorProps("password")}
        classNames={classes}
        styles={{ input: { backgroundColor: "transparent", color: "white" } }}
      />
      <Group justify="flex-end" mt="lg">
        <Anchor component="button" size="sm" c="white">
          Forgot password?
        </Anchor>
      </Group>
      <IproButton mt={10} fullWidth isSubmit={true}>
        Login
      </IproButton>
    </form>
  );
};

export default LoginForm;
