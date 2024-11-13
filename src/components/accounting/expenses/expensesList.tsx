"use client";

import Table from "@/components/common/Table";
import {
  Tooltip,
  Avatar,
  Box,
  Group,
  Button,
  Stack,
  Drawer,
  Title,
  Text
} from "@mantine/core";
import IproButton from "@/components/core/IproButton";
import { useDisclosure } from "@mantine/hooks";
import ExpenseDrawerBody from "./expenseDrawerBody";

type RowType = {
  id: string;
  user: {
    id: string;
    first_name: string;
    last_name: string;
  };
  date: string;
  amount: number;
  comment: string;
};

const invoice_data = [
  {
    id: "invoice_id",
    user: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    date: "25-10-2024",
    amount: 500,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
  },
  {
    id: "invoice_id",
    user: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    date: "25-10-2024",
    amount: 500,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
  },
  {
    id: "invoice_id",
    user: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    date: "25-10-2024",
    amount: 500,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
  },
  {
    id: "invoice_id",
    user: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    date: "25-10-2024",
    amount: 500,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
  },
  {
    id: "invoice_id",
    user: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    date: "25-10-2024",
    amount: 500,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
  },
  {
    id: "invoice_id",
    user: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    date: "25-10-2024",
    amount: 500,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
  },
  {
    id: "invoice_id",
    user: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    date: "25-10-2024",
    amount: 500,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
  },
  {
    id: "invoice_id",
    user: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    date: "25-10-2024",
    amount: 500,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
  },
  {
    id: "invoice_id",
    user: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    date: "25-10-2024",
    amount: 500,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
  },
  {
    id: "invoice_id",
    user: {
      id: "customer_id",
      first_name: "First Name",
      last_name: "Last Name"
    },
    date: "25-10-2024",
    amount: 500,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
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
    accessor: "user",
    title: "User Name",
    render: (row: RowType) => {
      return (
        <Group>
          <Avatar src="../../../assets/Avatar_man.png" />
          <Stack gap={2}>
            <Title order={6}>{row.user.first_name}</Title>
          </Stack>
        </Group>
      );
    }
  },
  {
    accessor: "amount"
  },
  {
    accessor: "comment",
    render: (row: RowType) => {
      return (
        <Tooltip label={row.comment}>
          <Box w={300}>
            <Text truncate="end">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              provident eos fugiat id necessitatibus magni ducimus molestias.
              Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi
              iste sint itaque sunt laborum. Nihil?
            </Text>
          </Box>
        </Tooltip>
      );
    }
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

const ExpensesList = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer opened={opened} position="right" onClose={close} size="29%">
        <ExpenseDrawerBody />
      </Drawer>
      <Table
        title="Total Expenses"
        description="All Expenses details"
        search={true}
        data={invoice_data}
        columns={columns}
        filter={<>Hello World</>}
        rightSection={
          <IproButton variant="outline" fullWidth onClick={open}>
            Create New Expense
          </IproButton>
        }
      />
    </>
  );
};

export default ExpensesList;
