"use client";

import { Box, Drawer, rem, Stack, Center, Paper, Text } from "@mantine/core";
import Heading from "@/components/common/Heading";
import IproButton from "@/components/core/IproButton";
import { useDisclosure } from "@mantine/hooks";

const InvoiveReceiptDrawer = () => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <Drawer position="right" opened={opened} onClose={close} pos="relative">
        <Stack>
          <Center>
            <Heading title="Job Created Successfully" />
            <Paper shadow="xs" withBorder p="xl">
              
            </Paper>
          </Center>
        </Stack>
      </Drawer>

      <IproButton pos="absolute" onClick={open}>
        Open Drawer
      </IproButton>
    </>
  );
};

export default InvoiveReceiptDrawer;
