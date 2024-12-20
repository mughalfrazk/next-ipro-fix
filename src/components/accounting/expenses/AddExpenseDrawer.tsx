"use client";

import { Stack, Textarea, Group, Modal, Drawer, Grid, GridCol } from "@mantine/core";
import IproButton from "@/components/core/IproButton";
import { useDisclosure } from "@mantine/hooks";
import IproTextInput from "@/components/core/IproTextInput";
import IproSelect from "@/components/core/IproSelect";
import { DateInput } from "@mantine/dates";
import ExpenseTypeModal from "@/components/settings/expense-type/ExpenseTypeDrawer";

const AddExpenseDrawer = ({
  openedDrawer,
  closeDrawer
}: {
  openedDrawer: boolean;
  closeDrawer: () => void;
}) => {
  const [opened, { open, close }] = useDisclosure();
  return (
    <>
      <ExpenseTypeModal opened={opened} close={close} />
      <Drawer
        opened={openedDrawer}
        title="Add New Expense"
        position="right"
        onClose={closeDrawer}
        size="29%"
        overlayProps={{ backgroundOpacity: 0 }}
      >
        <Stack align="stretch" justify="center">
          <Grid align="flex-end">
            <GridCol span={8}>
              <IproSelect
                label="Expense Type"
                placeholder="Expense Name"
                data={["Bill", "Snacks", "Dinner", "Salary"]}
                width={"100%"}
              />
            </GridCol>
            <GridCol span={4}>
              <IproButton onClick={open} size="lg" mb={2} fullWidth>
                Add New Type
              </IproButton>
            </GridCol>
          </Grid>
          <IproTextInput label="Amount" placeholder="Enter Expense Amount" />
          <DateInput
            label="Expense Date"
            placeholder="Enter Date"
            valueFormat="YYYY MMM DD"
            size="md"
          />
          <Textarea label="Comment" placeholder="Enter Comment" />
          <Group justify="flex-end" mt={20}>
            <IproButton variant="outline">Cancal</IproButton>
            <IproButton isSubmit={true}>Save Expense</IproButton>
          </Group>
        </Stack>
      </Drawer>
    </>
  );
};
export default AddExpenseDrawer;
