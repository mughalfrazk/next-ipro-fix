import { ExpenseTypeModel } from "@/lib/models/expense.model";
import { useDisclosure } from "@mantine/hooks";
import ExpenseTypeDrawer from "./ExpenseTypeDrawer";
import IproButton from "@/components/core/IproButton";
import { IconEdit } from "@tabler/icons-react";

const EditExpenseTypeDrawer = ({
  selectedExpenseType
}: {
  selectedExpenseType: ExpenseTypeModel;
}) => {
  const [opened, { open, close }] = useDisclosure();
  return (
    <>
      <ExpenseTypeDrawer
        title="Edit Expense Type"
        selectedExpenseType={selectedExpenseType}
        opened={opened}
        close={close}
      />
      <IproButton variant="subtle" isIconOnly onClick={open}>
        <IconEdit />
      </IproButton>
    </>
  );
};
export default EditExpenseTypeDrawer;
