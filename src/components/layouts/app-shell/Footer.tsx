"use client";

import { useProfileContext } from "@/context/profile.context";
import { Avatar, Group, Stack, Text } from "@mantine/core";

const Footer = () => {
  const {
    data: { email, first_name, last_name }
  } = useProfileContext();

  return (
    <Group p={20}>
      <Avatar src={"https://cdn-icons-png.flaticon.com/512/147/147131.png"} />
      <Stack gap={0}>
        <Text fw={500}>{`${first_name} ${last_name}`}</Text>
        <Text size="sm" opacity={0.6}>
          {email}
        </Text>
      </Stack>
    </Group>
  );
};

export default Footer;
