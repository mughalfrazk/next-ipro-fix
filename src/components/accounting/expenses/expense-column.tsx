"use client";

import { ExpenseModel } from "@/lib/models/expense.model";
import { Tooltip, Avatar, Box, Group, Button, Stack, Title, Text } from "@mantine/core";

const Expensecolumns = [
  {
    accessor: "id"
  },
  {
    accessor: "expense_date"
  },
  {
    accessor: "user",
    title: "User Name",
    render: (row: ExpenseModel) => {
      return (
        <Group>
          <Avatar src="../../../assets/Avatar_man.png" />
          <Stack gap={2}>
            <Title order={6}>{row.expense_type?.name}</Title>
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
    render: (row: ExpenseModel) => {
      return (
        <Tooltip label={row.comment}>
          <Box w={300}>
            <Text truncate="end">{row.comment}</Text>
          </Box>
        </Tooltip>
      );
    }
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

export default Expensecolumns;
