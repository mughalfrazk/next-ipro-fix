import Link from "next/link";
import { Button, Center, Stack, Text, Title } from "@mantine/core";

export default function NotFound() {
  return (
    <Center mih="100vh" p="md">
      <Stack align="center" gap="xs">
        <Title order={1} fz={80} lh={1}>
          404
        </Title>
        <Text c="dimmed" ta="center">
          The page you are looking for could not be found.
        </Text>
        <Button component={Link} href="/dashboard" mt="md" color="primary.6">
          Back to dashboard
        </Button>
      </Stack>
    </Center>
  );
}
