import { Avatar, BackgroundImage, Card, Divider, Grid, GridCol, Group, Image, Stack, Table, TableData, Text, Title } from "@mantine/core";

import Heading from "@/components/common/Heading";
import IproButton from "@/components/core/IproButton";

const InvoiceTab = () => {
  const tableData: TableData = {
    head: ["Brand Name", "Model", "Problem Type", "Issue", "QTY", "Charges"],
    body: [["Iphone", "14 pro max", "SW", "Issue details", "20", "AED 23000"]]
  };

  const tableData02: TableData = {
    head: ["Brand Name", "Model", "Problem Type", "Issue", "QTY", "Charges"],
    body: [
      ["Iphone", "14 pro max", "SW", "Issue details", "20", "AED 23000"],
      ["Iphone", "14 pro max", "SW", "Issue details", "20", "AED 23000"],
      ["Iphone", "14 pro max", "SW", "Issue details", "20", "AED 23000"],
      ["Iphone", "14 pro max", "SW", "Issue details", "20", "AED 23000"]
    ]
  };

  return (
    <Grid>
      <GridCol span={8}>
        <Card pb={20}>
          <BackgroundImage
            src="https://images.unsplash.com/photo-1709639593140-90c64158326a?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            px={30}
            py={20}
            radius="lg"
          >
            <Group justify="space-between">
              <Stack gap={0}>
                <Text c="white" fw="bold">
                  Invoice Number
                </Text>
                <Text c="white" size="lg" fw="bold">
                  #98076
                </Text>
                <Group mt={20}>
                  <Text c="white" size="xs">
                    Issued Date:{" "}
                  </Text>
                  <Text c="white">April 4-2023</Text>
                </Group>
                <Group>
                  <Text c="white" size="xs">
                    Issued Time:{" "}
                  </Text>
                  <Text c="white">12:33 PM</Text>
                </Group>
              </Stack>
              <Stack gap={0} align="flex-end">
                <Text c="white" fw="bold" ta="right">
                  Customer detials
                </Text>
                <Text c="white" size="lg" fw="bold" ta="right">
                  John Doe
                </Text>
                <Group mt={20}>
                  <Text c="white" size="xs" ta="right">
                    Ph no:{" "}
                  </Text>
                  <Text c="white" ta="right">
                    +1 889 909 878
                  </Text>
                </Group>
                <Group>
                  <Text c="white" size="xs" ta="right">
                    Company Name:{" "}
                  </Text>
                  <Text c="white" ta="right">
                    Al hamrah ltd
                  </Text>
                </Group>
              </Stack>
            </Group>
          </BackgroundImage>

          <Heading title="Job Detail" mt={30} mb={10} />
          <Table data={tableData} />

          <Heading title="Extra Job Task Detail" mt={30} mb={10} />
          <Table data={tableData02} />

          <Heading title="Total Payables" mt={30} mb={10} />
          <Divider mb={15} />
          <Group justify="space-between" mb={10}>
            <Text size="sm">Job Total</Text>
            <Text>AED 240.00</Text>
          </Group>
          <Group justify="space-between">
            <Text size="sm">Extra Total Job</Text>
            <Text>AED 240.00</Text>
          </Group>
          <Divider mt={15} mb={20} />
          <Group justify="space-between">
            <Title order={3}>Total Amount</Title>
            <Title order={3}>AED 480.00</Title>
          </Group>
        </Card>
      </GridCol>
      <GridCol span={4}>
        <Card>
          <Heading title="Actions" mb={20} />
          <IproButton mb={10}>Print Invoice</IproButton>
          <IproButton variant="outline">Edit Invoice</IproButton>
        </Card>
        <Card mt={15}>
          <Heading title="Job Technician" mb={20} />
          <Group ps={10} mb={20}>
            <Avatar name="Albert Flores" size="lg" color="initials" />
            <Stack gap={0}>
              <Title order={4} c="primary">
                Albert Flores
              </Title>
              <Text size="xs">jhondoe990@gmail.com</Text>
            </Stack>
          </Group>
          <Group justify="space-between" mb={10}>
            <Text size="sm">Amount Earned:</Text>
            <Text fw="600">AED 30</Text>
          </Group>
          <Group justify="space-between" mb={10}>
            <Text size="sm">Phone no:</Text>
            <Text fw="600">+1 889 909 878</Text>
          </Group>
          <Group justify="space-between" mb={10}>
            <Text size="sm">Address no:</Text>
            <Text fw="600">123 Plaza, Dubai</Text>
          </Group>
        </Card>
        <Card mt={15}>
          <Heading title="Job Barcode" mb={20} />
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__zUYSKisjapIoQLxoKwojgUSoZsRDSODAQ&s" height={30} mb={20} />
          <IproButton>Print Barcode</IproButton>
        </Card>
      </GridCol>
    </Grid>
  );
};

export default InvoiceTab;
