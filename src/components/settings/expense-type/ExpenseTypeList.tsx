"use client";

import { useDisclosure } from "@mantine/hooks";
import IproButton from "@/components/core/IproButton";
import Table from "@/components/common/Table";
import { ExpenseTypeColumns } from "./expense-type-column";
import { ExpenseTypeListModel } from "@/lib/models/expense.model";
import ExpenseTypeModal from "./ExpenseTypeDrawer";

const ExpenseTypeList = ({ expenseTypes }: { expenseTypes: ExpenseTypeListModel }) => {
  const [opened, { open, close }] = useDisclosure();
  return (
    <>
      <ExpenseTypeModal opened={opened} close={close} />
      <Table
        title="Expense Type List"
        description="All expense type used in expense page"
        columns={ExpenseTypeColumns}
        data={expenseTypes}
        rightSection={
          <IproButton fullWidth onClick={open}>
            Create New Expense Type
          </IproButton>
        }
      />
    </>
  );
};

export default ExpenseTypeList;
