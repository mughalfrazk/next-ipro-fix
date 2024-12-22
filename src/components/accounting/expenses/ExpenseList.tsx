"use client";

import { useDisclosure } from "@mantine/hooks";
import { ExpenseColumns } from "./expense-columns";
import { ExpenseListModel } from "@/lib/models/expense.model";
import IproButton from "@/components/core/IproButton";
import Table from "@/components/common/Table";
import ExpenseDrawer from "./ExpenseDrawer";

const ExpensesList = ({ expenses }: { expenses: ExpenseListModel }) => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <ExpenseDrawer openedDrawer={opened} closeDrawer={close} />
      <Table
        title="Total Expenses"
        description="All Expenses details"
        search={true}
        drawerTitle={"Expense Filter"}
        columns={ExpenseColumns}
        data={expenses}
        // filter={<ExpenseFilterBody />}
        rightSection={
          <IproButton fullWidth onClick={open}>
            Create New Expense
          </IproButton>
        }
      />
    </>
  );
};

export default ExpensesList;
