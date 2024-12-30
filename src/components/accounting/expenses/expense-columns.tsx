import { Avatar, Badge, Button, Group, NumberFormatter, Text, Title } from "@mantine/core";
import { ExpenseModel } from "@/lib/models/expense.model";
import { colorForExpenseType, showDateNicely } from "@/utils/functions";
import { text } from "stream/consumers";

export const ExpenseColumns = [
  {
    accessor: "id",
    render: (row: ExpenseModel) => {
      return (
        <Text fw={"bold"} c={"primary.6"}>
          {row.id.slice(-5)}
        </Text>
      );
    }
  },
  {
    accessor: "created_by",
    title: "Created by",
    render: (row: ExpenseModel) => {
      return (
        <Group>
          <Avatar key={row.created_by.last_name} name={row.created_by.last_name} color="initials" />
          <Title order={6}>{`${row.created_by.first_name} ${row.created_by.last_name}`}</Title>
        </Group>
      );
    }
  },
  {
    accessor: "amount",
    render: (row: ExpenseModel) => {
      return <NumberFormatter prefix="AED " value={row.amount} thousandSeparator />;
    }
  },
  {
    accessor: "Expense Type",
    render: (row: ExpenseModel) => {
      return (
        <Badge
          color={colorForExpenseType(row.expense_type.name)}
          radius="md"
          size="sm"
          px={10}
          pt={10}
          pb={9}
        >
          <Text size="10" fw="bold" c="white">
            {row.expense_type.name}
          </Text>
        </Badge>
      );
    }
  },
  {
    accessor: "comments"
  },
  {
    accessor: "actions",
    textAlign: "center",
    render: () => {
      return (
        <Button variant="subtle" color="var(--mantine-color-primary-6)">
          Open User
        </Button>
      );
    }
  },
  {
    title: "Created at",
    accessor: "created_at",
    textAlign: "right",
    render: (row: ExpenseModel) => {
      return showDateNicely(row.created_at);
    }
  }
];
