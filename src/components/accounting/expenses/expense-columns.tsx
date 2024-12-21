import { Button } from "@mantine/core";
import { ExpenseTypeModel } from "@/lib/models/expense.model";
import { showDateNicely } from "@/utils/functions";

export const ExpenseColumns = [
  {
    accessor: "id"
    // render: (row: ExpenseTypeModel) => {
    //   return (
    //     <Text fw={"bold"} c={"primary.6"}>
    //       {row.id.slice(-5)}
    //     </Text>
    //   );
    // }
  },
  // {
  //   accessor: "created_by",
  //   // title: "Created by",
  //   // render: (row: ExpenseTypeModel) => {
  //   //   return (
  //   //     <Group>
  //   //       {/* <Avatar key={row.created_by.last_name} name={row.created_by.last_name} color="initials" /> */}
  //   //       {/* <Title order={6}>{`${row.created_by.first_name} ${row.created_by.last_name}`}</Title> */}
  //   //     </Group>
  //   //   );
  //   // }
  // },
  {
    title: "Created at",
    accessor: "created_at",
    render: (row: ExpenseTypeModel) => {
      return showDateNicely(row.created_at);
    }
  },
  // {
  //   accessor: "amount",
  //   // render: (row: ExpenseTypeModel) => {
  //   //   // return <NumberFormatter prefix="AED " value={row.amount} thousandSeparator />;
  //   // }
  // },
  // {
  //   accessor: "comments"
  // },
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
