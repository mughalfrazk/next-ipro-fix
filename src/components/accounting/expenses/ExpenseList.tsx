"use client";

import { useDisclosure } from "@mantine/hooks";
import ExpenseDrawerBody from "./AddExpenseDrawer";
import IproButton from "@/components/core/IproButton";
import Table from "@/components/common/Table";
import Expensecolumns from "./expense-column";
import { ExpenseTypeListModel } from "@/lib/models/expense.model";

const ExpensesList = ({ expenses }: { expenses: ExpenseTypeListModel }) => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <ExpenseDrawerBody openedDrawer={opened} closeDrawer={close} />
      <Table
        title="Total Expenses"
        description="All Expenses details"
        search={true}
        drawerTitle={"Expense Filter"}
        columns={Expensecolumns}
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
