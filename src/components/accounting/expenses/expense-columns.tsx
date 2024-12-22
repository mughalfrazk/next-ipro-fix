import { Avatar, Button, Group, NumberFormatter, Text, Title } from "@mantine/core";
import { ExpenseModel } from "@/lib/models/expense.model";
import { showDateNicely } from "@/utils/functions";

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
    title: "Created at",
    accessor: "created_at",
    render: (row: ExpenseModel) => {
      return showDateNicely(row.created_at);
    }
  },
  {
    accessor: "amount",
    render: (row: ExpenseModel) => {
      return <NumberFormatter prefix="AED " value={row.amount} thousandSeparator />;
    }
  },
  {
    accessor: "comments"
  },
  {
    accessor: "actions",
    textAlign: "right",
    render: () => {
      return (
        <Button variant="subtle" color="var(--mantine-color-primary-6)">
          Open User
        </Button>
      );
    }
  }
];
