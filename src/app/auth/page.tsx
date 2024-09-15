import { Paper, Checkbox, Button, Title } from "@mantine/core";

import IproTextInput from "@/components/core/IproTextInput";
import { loginAction } from "@/lib/actions/auth.action";
import classes from "./page.module.css";

const Login = () => {
  return (
    <form className={classes.wrapper} action={loginAction}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to Mantine!
        </Title>

        <IproTextInput
          type="email"
          label="Email address"
          name="email"
          placeholder="hello@gmail.com"
          size="md"
        />
        <IproTextInput
          type="password"
          label="Password"
          name="password"
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button type="submit" fullWidth mt="xl" size="md">
          Login
        </Button>
      </Paper>
    </form>
  );
};

export default Login;
