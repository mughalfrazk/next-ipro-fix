"use Client";

import { Avatar, Badge, Group, Stack, Text, Title } from "@mantine/core";
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
            name={`${row.customer.first_name} ${row.customer.last_name}`}
            color="initials"
          />
          <Stack gap={2}>
            <Title
              order={6}
            >{`${row.customer.first_name} ${row.customer.last_name}`}</Title>
            <Text
              size={"0.7rem"}
            >{`${row.customer.first_name} ${row.customer.last_name}`}</Text>
          </Stack>
        </Group>
      );
    }
  },
  {
    accessor: "amount"
  }
];
