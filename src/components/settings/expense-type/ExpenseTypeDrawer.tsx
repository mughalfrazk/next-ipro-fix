import { useRouter } from "next/navigation";
import { useFormAction } from "@/hooks/use-form-action";
import { useEffect, useTransition } from "react";
import { Stack, Drawer, Group } from "@mantine/core";
import {
  createExpenseTypeAction,
  updateExpenseTypeAction
} from "@/lib/actions/expense-type.action";
import { ExpenseTypeModel } from "@/lib/models/expense.model";
import IproButton from "@/components/core/IproButton";
import IproTextInput from "@/components/core/IproTextInput";

const ExpenseTypeDrawer = ({
  opened,
  close,
  title,
  selectedExpenseType
}: {
  title?: string;
  opened: boolean;
  close: () => void;
  selectedExpenseType?: ExpenseTypeModel;
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { state, formAction, getFieldErrorProps } = useFormAction(
    !!selectedExpenseType ? updateExpenseTypeAction : createExpenseTypeAction,
    {}
  );
  const handleSubmit = async (formData: FormData) => {
    startTransition(() => {
      formAction(formData);
    });
  };
  useEffect(() => {
    if (!isPending && typeof state?.success === "string") {
      close();
      router.push("/dashboard/settings/expense-type");
      router.refresh();
    }
  }, [isPending, state]);
  return (
    <Drawer
      opened={opened}
      onClose={close}
      title={title ?? "Add New Expense Type"}
      zIndex="250"
      size="29%"
      overlayProps={{
        backgroundOpacity: 0,
        blur: 0
      }}
      transitionProps={{ transition: "fade-left" }}
      styles={{
        inner: { display: "flex", justifyContent: "flex-end" }
      }}
    >
      <form action={handleSubmit}>
        <Stack>
          <IproTextInput
            mt={10}
            type="text"
            label="Name"
            name="name"
            defaultValue={selectedExpenseType?.name}
            placeholder="Enter New Expense Type Name"
            {...getFieldErrorProps("name")}
          />
          {selectedExpenseType && (
            <IproTextInput
              type="number"
              name="id"
              defaultValue={selectedExpenseType.id}
              style={{ display: "none" }}
            />
          )}
          <Group justify="flex-end" mt={20}>
            <IproButton variant="outline" onClick={close}>
              Cancel
            </IproButton>
            <IproButton isSubmit={true}>Save Expense Type</IproButton>
          </Group>
        </Stack>
      </form>
    </Drawer>
  );
};

export default ExpenseTypeDrawer;
