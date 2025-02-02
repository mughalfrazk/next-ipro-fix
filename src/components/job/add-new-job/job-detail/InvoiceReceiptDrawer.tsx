"use client";

import { Modal, Image, Stack, Center, Group, Text, Paper, Divider, Table } from "@mantine/core";
import Heading from "@/components/common/Heading";
import IproButton from "@/components/core/IproButton";
import { useDisclosure } from "@mantine/hooks";

const InvoiveReceiptDrawer = ({ opened, close }: { opened: boolean; close: () => void }) => {
  return (
    <>
      <Modal opened={opened} onClose={close} pos="relative">
        <Center>
          <Stack>
            <Heading ta="center" title="Job Created Successfully" />
            <Paper bd="1px solid black" w={400} p={25}>
              <Stack justify="center" align="center" gap="xs">
                <Text size="md">Customer Name</Text>
                <Text size="lg" fw={600}>
                  Jhon Doe
                </Text>
              </Stack>
              <Divider color="black" size="sm" my="sm" variant="dashed" />
              <Group justify="space-between" px={25}>
                <Text size="md" fw={600}>
                  Charges
                </Text>
                <Text size="md" fw={600}>
                  AED 452.99
                </Text>
              </Group>
              <Divider color="black" size="sm" my="sm" variant="dashed" />
              <Center>
                <Image
                  w={200}
                  src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__zUYSKisjapIoQLxoKwojgUSoZsRDSODAQ&s"
                />
              </Center>
            </Paper>
            <Group justify="center">
              <IproButton variant="outline">Cancal</IproButton>
              <IproButton isSubmit={true}>Print Sticker</IproButton>
            </Group>
          </Stack>
        </Center>
      </Modal>
    </>
  );
};

export default InvoiveReceiptDrawer;
