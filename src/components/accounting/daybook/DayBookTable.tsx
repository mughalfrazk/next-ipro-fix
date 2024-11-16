"use client";

import Table from "@/components/common/Table";
import { Avatar, Badge, Group, Stack, Button, Title, Text } from "@mantine/core";

const colorForCashStatus = (name: string) => {
  return name === "Cash-Out" ? "red" : name === "Cash-In" ? "green" : "black";
};
const colorForAmountType = (name: string) => {
  return name === "PURCHSE" ? "red" : name === "EXPENSE" ? "grape" : name === "JOB" ? "green" : "black";
};

type RowType = {
  date_time: string;
  customer: {
    id: string;
    first_name: string;
    last_name: string;
  };
  cash_type: {
    in: string;
    out: string;
  };
  amount_type: {
    job: string;
    purchase: string;
    expense: string;
  };
  amount: number;
};

const invoice_data = [
  {
    date_time: "25/10/24 - 02:34 am",
    customer: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    cash_type: {
      in: "Cash-In",
      out: "Cash-Out"
    },
    amount_type: {
      job: "JOB",
      purchase: "PURCHASE",
      expense: "EXPENSE"
    },
    amount: 500
  },
  {
    date_time: "25/10/24 - 02:34 am",
    customer: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    cash_type: {
      in: "Cash-In",
      out: "Cash-Out"
    },
    amount_type: {
      job: "JOB",
      purchase: "PURCHASE",
      expense: "EXPENSE"
    },
    amount: 500
  },
  {
    date_time: "25/10/24 - 02:34 am",
    customer: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    cash_type: {
      in: "Cash-In",
      out: "Cash-Out"
    },
    amount_type: {
      job: "JOB",
      purchase: "PURCHASE",
      expense: "EXPENSE"
    },
    amount: 500
  },
  {
    date_time: "25/10/24 - 02:34 am",
    customer: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    cash_type: {
      in: "Cash-In",
      out: "Cash-Out"
    },
    amount_type: {
      job: "JOB",
      purchase: "PURCHASE",
      expense: "EXPENSE"
    },
    amount: 500
  },
  {
    date_time: "25/10/24 - 02:34 am",
    customer: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    cash_type: {
      in: "Cash-In",
      out: "Cash-Out"
    },
    amount_type: {
      job: "JOB",
      purchase: "PURCHASE",
      expense: "EXPENSE"
    },
    amount: 500
  },
  {
    date_time: "25/10/24 - 02:34 am",
    customer: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    cash_type: {
      in: "Cash-In",
      out: "Cash-Out"
    },
    amount_type: {
      job: "JOB",
      purchase: "PURCHASE",
      expense: "EXPENSE"
    },
    amount: 500
  },
  {
    date_time: "25/10/24 - 02:34 am",
    customer: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    cash_type: {
      in: "Cash-In",
      out: "Cash-Out"
    },
    amount_type: {
      job: "JOB",
      purchase: "PURCHASE",
      expense: "EXPENSE"
    },
    amount: 500
  },
  {
    date_time: "25/10/24 - 02:34 am",
    customer: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    cash_type: {
      in: "Cash-In",
      out: "Cash-Out"
    },
    amount_type: {
      job: "JOB",
      purchase: "PURCHASE",
      expense: "EXPENSE"
    },
    amount: 500
  },
  {
    date_time: "25/10/24 - 02:34 am",
    customer: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    cash_type: {
      in: "Cash-In",
      out: "Cash-Out"
    },
    amount_type: {
      job: "JOB",
      purchase: "PURCHASE",
      expense: "EXPENSE"
    },
    amount: 500
  },
  {
    date_time: "25/10/24 - 02:34 am",
    customer: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    cash_type: {
      in: "Cash-In",
      out: "Cash-Out"
    },
    amount_type: {
      job: "JOB",
      purchase: "PURCHASE",
      expense: "EXPENSE"
    },
    amount: 500
  }
];

const columns = [
  {
    accessor: "date_time"
  },

  {
    accessor: "customer",
    render: (row: RowType) => {
      return (
        <Group>
          <Avatar src="../../../assets/Avatar_man.png" alt="avatar place holder" />
          <Stack gap={2}>
            <Title order={6}>{row.customer.first_name}</Title>
            <Text c="dimmed">{row.customer.id}</Text>
          </Stack>
        </Group>
      );
    }
  },

  {
    accessor: "cash_type",
    render: (row: RowType) => {
      return (
        <Badge variant="outline" color={colorForCashStatus(row.cash_type.in)} radius="sm" p={12}>
          {row.cash_type.in}
        </Badge>
      );
    }
  },
  {
    accessor: "amount_type",
    render: (row: RowType) => {
      return (
        <Title order={5} c={colorForAmountType(row.amount_type.job)}>
          {row.amount_type.job}
        </Title>
      );
    }
  },
  {
    accessor: "amount"
  },
  {
    accessor: "actions",
    render: () => {
      return (
        <Button variant="transparent" size="compact-sm" color="var(--mantine-color-primary-6)">
          Open Amount
        </Button>
      );
    }
  }
];

const DayBookList = () => {
  return (
    <Table
      title="Total Cashflow"
      description="All in and out cash details"
      search={true}
      data={invoice_data}
      columns={columns}
      filter={<>Hello World</>}
    />
  );
};

export default DayBookList;
