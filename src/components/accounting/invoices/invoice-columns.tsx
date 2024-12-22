import { InvoiceRowModel } from "@/lib/models/invoice.model";
import { colorForInvoiceStatus, showDateNicely } from "@/utils/functions";
import { Avatar, Badge, Button, Group, NumberFormatter, Stack, Text, Title } from "@mantine/core";
import Link from "next/link";

export const InvoiceColumns = [
  {
    accessor: "Invoice ID",
    render: (row: InvoiceRowModel) => {
      return (
        <Link href={`/dashboard/job/${row.id}?tab=invoice`}>
          <Text fw={"bold"} c={"primary.6"}>
            {row.id.slice(-5)}
          </Text>
        </Link>
      );
    }
  },
  {
    title: "Created at",
    accessor: "created_at",
    textAlign: "right",
    render: (row: InvoiceRowModel) => {
      return showDateNicely(row.created_at).split(" ")[0];
    }
  },
  {
    accessor: "customer",
    render: (row: InvoiceRowModel) => {
      return (
        <Group>
          <Avatar key={row.customer.name} name={row.customer.name} color="initials" />
          <Stack gap={2}>
            <Title order={6}>{row.customer.name}</Title>
          </Stack>
        </Group>
      );
    }
  },
  {
    accessor: "Amount",
    render: (row: InvoiceRowModel) => {
      return <NumberFormatter prefix="AED " value={row.total} thousandSeparator />;
    }
  },
  {
    accessor: "Invoice Status",
    render: (row: InvoiceRowModel) => {
      return (
        <Badge
          color={colorForInvoiceStatus(row.invoice_status.name)}
          radius="md"
          size="sm"
          px={10}
          pt={10}
          pb={9}
        >
          <Text size="10" fw="bold" c="white">
            {row.invoice_status.name}
          </Text>
        </Badge>
      );
    }
  },
  {
    accessor: "devices_qty"
  },
  {
    accessor: "actions",
    textAlign: "right",
    render: (row: InvoiceRowModel) => {
      return (
        <Link href={`/dashboard/job/${row.id}?tab=invoice`}>
          <Button variant="subtle" color="var(--mantine-color-primary-6)">
            Open Invoice
          </Button>
        </Link>
      );
    }
  }
];
