import { Stack, Text, Grid, MultiSelect } from "@mantine/core";
import IproButton from "@/components/core/IproButton";
import { DateInput } from "@mantine/dates";

const DayBookFilterBody = () => {
  return (
    <Stack>
      <Text size="sm">
        You can filter day book with date range users cash in and out and amount type
      </Text>
      <Grid>
        <Grid.Col span={12}>
          <DateInput
            label="Select Date"
            placeholder="Enter Date"
            valueFormat="YYYY MMM DD"
            size="sm"
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <MultiSelect
            label="Users"
            placeholder="Select User to Filter"
            data={["User 1", "User 2", "User 3", "User 4"]}
            defaultValue={["All"]}
            clearable
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <MultiSelect
            label="Cash In/Out"
            placeholder="Select Cash in or out to Filter"
            data={["Cash In", "Cash Out"]}
            defaultValue={["All"]}
            clearable
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <MultiSelect
            label="Amount Type"
            placeholder="Select User Name to Filter"
            data={["Job", "Purchase", "Expense"]}
            defaultValue={["All"]}
            clearable
          />
        </Grid.Col>
      </Grid>
      <Stack align="start">
        <IproButton>Apply Filter</IproButton>
      </Stack>
    </Stack>
  );
};

export default DayBookFilterBody;
