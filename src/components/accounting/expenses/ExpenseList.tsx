"use client";

import { useDisclosure } from "@mantine/hooks";
import IproButton from "@/components/core/IproButton";
import Table from "@/components/common/Table";
import { ExpenseColumns } from "./expense-columns";
import { ExpenseTypeListModel } from "@/lib/models/expense-type.model";
import ExpenseDrawer from "./ExpenseDrawer";

const ExpensesList = ({ expenses }: { expenses: ExpenseTypeListModel }) => {
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
