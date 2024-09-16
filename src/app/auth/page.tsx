import { Container, Anchor, Title, Text } from "@mantine/core";

import classes from "./page.module.css";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>

      <LoginForm />
    </Container>
  );
};

export default Login;
