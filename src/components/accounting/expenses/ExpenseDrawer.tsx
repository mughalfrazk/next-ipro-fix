"use client";

import { Stack, Group, Drawer, Grid, GridCol } from "@mantine/core";
import { useEffect, useTransition } from "react";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";

import { ExpenseModel } from "@/lib/models/expense.model";
import { useFormAction } from "@/hooks/use-form-action";
import { createExpenseAction, updateExpenseAction } from "@/lib/actions/expense.action";
import ExpenseTypeModal from "@/components/settings/expense-type/ExpenseTypeDrawer";
import CreateUpdateSelectInput from "@/components/common/CreateUpdateSelectInput";
import { getExpenseTypeApi } from "@/lib/services/api/expense-type.service";
import { capitalizeFirstLetter } from "@/utils/functions";
import IproTextInput from "@/components/core/IproTextInput";
import IproButton from "@/components/core/IproButton";

const ExpenseDrawer = ({
  openedDrawer,
  closeDrawer,
  title,
  selectedExpense
}: {
  openedDrawer: boolean;
  closeDrawer: () => void;
  title?: string;
  selectedExpense?: ExpenseModel;
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [opened, { open, close }] = useDisclosure();
  const { state, formAction, getFieldErrorProps } = useFormAction(
    !!selectedExpense ? updateExpenseAction : createExpenseAction,
    {}
  );

  const getExpenseTypeList = async () => {
    const result = await getExpenseTypeApi();
    return result.map((item) => ({
      label: capitalizeFirstLetter(item.name),
      value: String(item.id)
    }));
  };

  const handleSubmit = async (formData: FormData) => {
    startTransition(() => {
      formAction(formData);
    });
  };

  useEffect(() => {
    if (!isPending && typeof state?.success === "string") {
      closeDrawer();
      router.push("/dashboard/accounting/expenses");
      router.refresh();
    }
  }, [isPending, state]);

  return (
    <>
      <ExpenseTypeModal opened={opened} close={close} />
      <Drawer
        opened={openedDrawer}
        title={title ?? "Add New Expense"}
        position="right"
        onClose={closeDrawer}
        size="29%"
        overlayProps={{ backgroundOpacity: 0 }}
      >
        <form action={handleSubmit}>
          <Stack align="stretch" justify="center">
            <Grid align="flex-end">
              <GridCol span={8}>
                <CreateUpdateSelectInput
                  label="Expense Type"
                  name="expense_type_id"
                  placeholder="Select expense type from list"
                  inputDefaultValue={selectedExpense?.expense_type.id}
                  asyncDataMethod={getExpenseTypeList}
                  searchable
                  {...getFieldErrorProps("expense_type_id")}
                />
              </GridCol>
              <GridCol span={4}>
                <IproButton onClick={open} size="lg" mb={2} fullWidth>
                  Add New Type
                </IproButton>
              </GridCol>
            </Grid>
            <IproTextInput
              type="number"
              label="Amount"
              name="amount"
              defaultValue={selectedExpense?.amount ?? ""}
              placeholder="4500"
              {...getFieldErrorProps("amount")}
            />
            <IproTextInput
              type="text"
              label="Comments"
              name="comments"
              defaultValue={selectedExpense?.comments ?? ""}
              placeholder="Utility Bill"
              {...getFieldErrorProps("comments")}
            />
            {selectedExpense && (
              <IproTextInput
                type="number"
                name="id"
                defaultValue={selectedExpense.id}
                style={{ display: "none" }}
              />
            )}
            <Group justify="flex-end" gap={10}>
              <IproButton variant="outline" onClick={closeDrawer}>
                Cancel
              </IproButton>
              <IproButton isSubmit={true}>Submit</IproButton>
            </Group>
          </Stack>
        </form>
      </Drawer>
    </>
  );
};
export default ExpenseDrawer;
