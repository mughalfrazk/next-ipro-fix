"use client";

import Table from "@/components/common/Table";
import {
  Avatar,
  Badge,
  Group,
  Stack,
  Button,
  Title,
  Text,
  Grid,
  MultiSelect
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import IproButton from "@/components/core/IproButton";
const colorForInvoiceStatus = (name: string) => {
  return name === "Half Paid" ? "red" : name === "Unpaid" ? "indigo" : name === "Paid" ? "green" : "black";
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
          <Avatar key={row.customer.first_name} name={row.customer.first_name} color="initials" />
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
        <Badge variant="outline" color={colorForInvoiceStatus(row.status.paid)} radius="sm" p={12}>
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
        <Button variant="transparent" size="compact-sm" color="var(--mantine-color-primary-6)">
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
      drawerTitle={"Invoice Filter"}
      columns={columns}
      filter={
        <Stack>
          <Text size="sm">
            You can filter invoices by dates, customer and status wise
          </Text>
          <Grid grow>
            <Grid.Col span={6}>
              <DateInput
                label="Start Date"
                placeholder="Enter Start Date"
                valueFormat="YYYY MMM DD"
                size="sm"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <DateInput
                label="End Date"
                placeholder="Enter End Date"
                valueFormat="YYYY MMM DD"
                size="sm"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <MultiSelect
                label="Invoice Status"
                placeholder="Select User Roles to Filter"
                data={["Paid", "Half Paid", "Full Paid"]}
                defaultValue={["All"]}
                clearable
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <MultiSelect
                label="Customers"
                placeholder="Select User Roles to Filter"
                data={["Customer Name 1", "Customer Name 2", "Customer Name 3"]}
                defaultValue={["All"]}
                clearable
              />
            </Grid.Col>
          </Grid>
          <Stack align="start">
            <IproButton>Apply Filter</IproButton>
          </Stack>
        </Stack>
      }
    />
  );
};

export default InvoicesList;
