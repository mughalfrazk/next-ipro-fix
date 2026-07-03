import { BackgroundImage, Box, Text, Title, Stack } from "@mantine/core";

import LoginForm from "@/components/auth/LoginForm";
import IproLogo from "@/components/common/IproLogo";
import loginBg from "@/assets/login-bg.jpeg";

const Login = () => {
  return (
    <BackgroundImage
      src={loginBg.src}
      h={"100vh"}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Box
        w={{ md: "50%", sm: "80%", base: "90%" }}
        px={30}
        py={40}
        mt={30}
        style={{
          backdropFilter: "blur(30px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "2rem",
          border: "1px solid var(--mantine-color-white)"
        }}
      >
        <IproLogo variant="dark" size={38} />
        <Title ta="center" mt={20} c="var(--mantine-color-white)">
          Welcome to Iprofix CRM 👋🏻
        </Title>
        <Text ta="center" mt="sm" c="var(--mantine-color-white)">
          Please enter your email and password to login to your account
        </Text>
        <Stack pt={40} pb={60} px={100}>
          <LoginForm />
        </Stack>
      </Box>
    </BackgroundImage>
  );
};

export default Login;
