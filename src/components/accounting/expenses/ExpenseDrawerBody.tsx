import { Stack, Title, Textarea, Group, Modal } from "@mantine/core";
import IproButton from "@/components/core/IproButton";
import { useDisclosure } from "@mantine/hooks";
import IproTextInput from "@/components/core/IproTextInput";
import IproSelect from "@/components/core/IproSelect";
import { DateInput } from "@mantine/dates";

const ExpenseDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Stack align="stretch" justify="center">
      <Modal
        opened={opened}
        onClose={close}
        title="New Expense Type"
        yOffset="1vh"
        xOffset="29.5vw"
        overlayProps={{
          backgroundOpacity: 0,
          blur: 0
        }}
        transitionProps={{ transition: "fade-left" }}
        styles={{
          inner: { display: "flex", justifyContent: "flex-end" }
        }}
      >
        {
          <Stack>
            <IproTextInput
              mt={10}
              label="New Expense Type Name"
              placeholder="Enter New Expense Type Name"
            />
            <Group justify="flex-end" mt={20}>
              <IproButton variant="outline">Cancal</IproButton>
              <IproButton isSubmit={true}>Save Expense Type</IproButton>
            </Group>
          </Stack>
        }
      </Modal>
      <Title ta={"center"} order={4}>
        Add New Expense
      </Title>
      <IproButton variant="outline" onClick={open}>
        Add New Expense Type
      </IproButton>
      <IproSelect
        label="Expense Type"
        placeholder="Expense Name"
        data={["Bill", "Snacks", "Dinner", "Salary"]}
        width={"lg"}
      />
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
  );
};
export default ExpenseDrawer;
