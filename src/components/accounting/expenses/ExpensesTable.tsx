"use client";

import Table from "@/components/common/Table";
import { useDisclosure } from "@mantine/hooks";

import { ExpenseColumns } from "./expense-columns";
import { ExpenseListModel } from "@/lib/models/expense.model";
import IproButton from "@/components/core/IproButton";
import ExpenseDrawer from "./ExpenseDrawer";

const ExpensesTable = ({ expenses }: { expenses: ExpenseListModel }) => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <ExpenseDrawer openedDrawer={opened} closeDrawer={close} />
      <Table
        title="Total Expenses"
        description="All Expenses details"
        search={true}
        data={expenses}
        columns={ExpenseColumns}
        drawerTitle={"Expense Filter"}
        rightSection={
          <IproButton fullWidth onClick={open}>
            Create New Expense
          </IproButton>
        }
      />
    </>
  );
};

export default ExpensesTable;
