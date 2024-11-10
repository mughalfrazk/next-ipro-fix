"use client";

import Table from "@/components/common/Table";
import { Avatar, Badge, Group, Stack, Button, Title } from "@mantine/core";

const colorForInvoiceStatus = (name: string) => {
  return name === "Half Paid"
    ? "red"
    : name === "Unpaid"
      ? "indigo"
      : name === "Paid"
        ? "green"
        : "black";
};

type RowType = {
  id: string;
  date: string;
  customer: {
    id: string;
    first_name: string;
    last_name: string;
  };
  amount: number;
  status: {
    paid: string;
    half_paid: string;
    un_paid: string;
  };
  quantity: number;
  purchaseAmount: number;
};

const invoice_data = [
  {
    id: "invoice_id",
    date: "25-10-2024",
    customer: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    amount: 500,
    status: {
      paid: "Paid",
      half_paid: "Half Paid",
      un_paid: "Unpaid"
    },
    quantity: 20,
    purchaseAmount: 400
  },
  {
    id: "invoice_id",
    date: "25-10-2024",
    customer: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    amount: 500,
    status: {
      paid: "Paid",
      half_paid: "Half Paid",
      un_paid: "Unpaid"
    },
    quantity: 20,
    purchaseAmount: 400
  },
  {
    id: "invoice_id",
    date: "25-10-2024",
    customer: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    amount: 500,
    status: {
      paid: "Paid",
      half_paid: "Half Paid",
      un_paid: "Unpaid"
    },
    quantity: 20,
    purchaseAmount: 400
  },
  {
    id: "invoice_id",
    date: "25-10-2024",
    customer: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    amount: 500,
    status: {
      paid: "Paid",
      half_paid: "Half Paid",
      un_paid: "Unpaid"
    },
    quantity: 20,
    purchaseAmount: 400
  },
  {
    id: "invoice_id",
    date: "25-10-2024",
    customer: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    amount: 500,
    status: {
      paid: "Paid",
      half_paid: "Half Paid",
      un_paid: "Unpaid"
    },
    quantity: 20,
    purchaseAmount: 400
  },
  {
    id: "invoice_id",
    date: "25-10-2024",
    customer: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    amount: 500,
    status: {
      paid: "Paid",
      half_paid: "Half Paid",
      un_paid: "Unpaid"
    },
    quantity: 20,
    purchaseAmount: 400
  }
];

const columns = [
  {
    accessor: "id"
  },
  {
    accessor: "date"
  },

  {
    accessor: "customer",
    render: (row: RowType) => {
      return (
        <Group>
          <Avatar
            key={row.customer.first_name}
            name={row.customer.first_name}
            color="initials"
          />
          <Stack gap={2}>
            <Title order={6}>{row.customer.first_name}</Title>
          </Stack>
        </Group>
      );
    }
  },
  {
    accessor: "amount"
  },
  {
    accessor: "status",
    render: (row: RowType) => {
      return (
        <Badge
          variant="outline"
          color={colorForInvoiceStatus(row.status.paid)}
          radius="sm"
          p={12}
        >
          {row.status.paid}
        </Badge>
      );
    }
  },
  {
    accessor: "quantity"
  },
  {
    accessor: "amount"
  },
  {
    accessor: "actions",
    render: () => {
      return (
        <Button
          variant="transparent"
          size="compact-sm"
          color="var(--mantine-color-primary-6)"
        >
          Open Invoice
        </Button>
      );
    }
  }
];

const InvoicesList = () => {
  return (
    <Table
      title="Total Invoices"
      description="All invoices details"
      search={true}
      data={invoice_data}
      columns={columns}
      filter={<>Hello World</>}
    />
  );
};

export default InvoicesList;
