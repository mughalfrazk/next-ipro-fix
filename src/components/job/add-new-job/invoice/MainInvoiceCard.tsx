import {
  BackgroundImage,
  Card,
  Divider,
  Group,
  NumberFormatter,
  Stack,
  Text,
  Title
} from "@mantine/core";

import {
  InvoiceIssueItemModel,
  InvoiceModel,
  InvoicePurchaseItemModel
} from "@/lib/models/invoice.model";
import { showDateNicely } from "@/utils/functions";
import Heading from "@/components/common/Heading";
import Table from "@/components/common/Table";

const MainInvoiceCard = ({ invoice }: { invoice: InvoiceModel }) => {
  const issues_columns = [
    {
      accessor: "brand_id",
      title: "Brand Name",
      render: (row: InvoiceIssueItemModel) => {
        return row?.brand?.name;
      }
    },
    {
      accessor: "model_id",
      title: "Model",
      render: (row: InvoiceIssueItemModel) => {
        return row?.model?.name;
      }
    },
    {
      accessor: "problem_type_id",
      title: "Problem Type",
      render: (row: InvoiceIssueItemModel) => {
        return row?.problem?.name;
      }
    },
    {
      accessor: "quantity"
    },
    {
      accessor: "charges"
    },
    {
      accessor: "total",
      textAlign: "right"
    }
  ];

  const purchase_columns = [
    {
      accessor: "part_id",
      title: "Part Name",
      render: (row: InvoicePurchaseItemModel) => {
        return row?.part?.name;
      }
    },
    {
      accessor: "model_id",
      title: "Model Name",
      render: (row: InvoicePurchaseItemModel) => {
        return row?.model?.name;
      }
    },
    {
      accessor: "quantity"
    },
    {
      accessor: "total",
      textAlign: "right"
    }
  ];

  return (
    <Card pb={20}>
      <BackgroundImage
        src="https://images.unsplash.com/photo-1690046793177-44d9e1b3de38?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        px={30}
        py={20}
        radius="md"
      >
        <Group justify="space-between">
          <Stack gap={0}>
            <Text c="white" size="sm" fw="bold">
              Invoice Number
            </Text>
            <Text c="white" size="xl" fw="bold">
              {invoice.id ? invoice.id : "XXXXXX-XXX-XXX-XXXXXXX"}
            </Text>
            <Group mt={20} gap={6}>
              <Text c="white" size="xs">
                Issued Date:
              </Text>
              <Text c="white" fw="600">
                {invoice.created_at ? showDateNicely(invoice.created_at).split(" ")[0] : "No Date"}
              </Text>
            </Group>
            <Group gap={6}>
              <Text c="white" size="xs">
                Issued Time:
              </Text>
              <Text c="white" fw="600">
                {invoice.created_at ? showDateNicely(invoice.created_at).split(" ")[0] : "No Time"}
              </Text>
            </Group>
          </Stack>
          <Stack gap={0} align="flex-end">
            <Text c="white" fw="bold" size="sm" ta="right">
              Customer
            </Text>
            <Text c="white" size="xl" fw="bold" ta="right">
              {invoice.customer.name}
            </Text>
            <Group mt={20} gap={6}>
              <Text c="white" size="xs" ta="right">
                Ph no:
              </Text>
              <Text c="white" ta="right" fw="600">
                {invoice.customer.phone}
              </Text>
            </Group>
            <Group gap={6}>
              <Text c="white" size="xs" ta="right">
                Company Name:
              </Text>
              <Text c="white" ta="right" fw="600">
                {invoice.customer.company_name}
              </Text>
            </Group>
          </Stack>
        </Group>
      </BackgroundImage>

      <Heading title="Issues" mt={30} />
      <Table p={0} columns={issues_columns} data={invoice.issues} pagination={false} />

      <Heading title="Extra Job Task Detail" mt={30} />
      <Table p={0} columns={purchase_columns} data={invoice.purchases ?? []} pagination={false} />

      <Heading title="Total Payables" mt={30} mb={10} />
      <Divider mb={15} />
      <Group justify="space-between" mb={10}>
        <Text size="sm">Job Total</Text>
        <Text>
          <NumberFormatter prefix="AED " value={invoice.issue_total} thousandSeparator />
        </Text>
      </Group>
      <Group justify="space-between">
        <Text size="sm">Extra Total Job</Text>
        <Text>
          <NumberFormatter prefix="AED " value={invoice.purchase_total} thousandSeparator />
        </Text>
      </Group>
      <Divider mt={15} mb={20} />
      <Group justify="space-between">
        <Title order={3}>Total Amount</Title>
        <Title order={3}>
          <NumberFormatter prefix="AED " value={invoice.total} thousandSeparator />
        </Title>
      </Group>
    </Card>
  );
};

export default MainInvoiceCard;
