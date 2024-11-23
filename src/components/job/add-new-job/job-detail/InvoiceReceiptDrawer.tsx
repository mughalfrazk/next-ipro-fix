"use client";

import { Drawer, Image, Stack, Center, Group, Text, Paper, Divider, Table } from "@mantine/core";
import Heading from "@/components/common/Heading";
import IproButton from "@/components/core/IproButton";
import { useDisclosure } from "@mantine/hooks";

const InvoiveReceiptDrawer = () => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <Drawer position="right" opened={opened} onClose={close} pos="relative">
        <Center>
          <Stack>
            <Heading ta="center" title="Job Created Successfully" />
            <Paper bd="1px solid black" w={400} p={25}>
              <Group justify="space-between">
                <Text size="sm">Invoice No: 12345</Text>
                <Text size="sm">Monday, January 21</Text>
              </Group>
              <Divider color="black" size="sm" my="sm" variant="dashed" />
              <Table borderColor="black">
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Model</Table.Th>
                    <Table.Th>Qty</Table.Th>
                    <Table.Th>Price</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td>12 Pro</Table.Td>
                    <Table.Td>12</Table.Td>
                    <Table.Td>AED 12.99</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>14 Pro MAax</Table.Td>
                    <Table.Td>30</Table.Td>
                    <Table.Td>AED 40</Table.Td>
                  </Table.Tr>
                  <Table.Tr>
                    <Table.Td>15 Pro Max</Table.Td>
                    <Table.Td>50</Table.Td>
                    <Table.Td>AED 400</Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
              <Divider color="black" size="sm" my="sm" variant="dashed" />
              <Group justify="space-between" px={25}>
                <Text size="md" fw={600}>
                  Total
                </Text>
                <Text size="md" fw={600}>
                  AED 452.99
                </Text>
              </Group>
              <Divider color="black" size="sm" my="sm" variant="dashed" />
              <Text ta="center" size="sm">
                Policy: This is the footer Message you can type your message here
              </Text>
              <Divider color="black" size="sm" my="sm" variant="dashed" />
              <Center>
                <Image
                  w={200}
                  src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__zUYSKisjapIoQLxoKwojgUSoZsRDSODAQ&s"
                />
              </Center>
              <Stack justify="space-between" px={25} pt={20}>
                <Text ta="center" size="sm">
                  Ph: 971 5224958
                </Text>
                <Text ta="center" size="sm">
                  43, 57b Street, Umm Suqeim 1, Umm Suqeim, Dubai, United Arab Emirates
                </Text>
              </Stack>
            </Paper>
            <Group justify="center">
              <IproButton variant="outline">Cancal</IproButton>
              <IproButton isSubmit={true}>Save Job</IproButton>
            </Group>
          </Stack>
        </Center>
      </Drawer>

      <IproButton pos="absolute" onClick={open}>
        Open Drawer
      </IproButton>
    </>
  );
};

export default InvoiveReceiptDrawer;
