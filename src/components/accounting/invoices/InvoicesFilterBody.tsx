import { DateInput } from "@mantine/dates";
import { Text, Stack, Grid, MultiSelect } from "@mantine/core";
import IproButton from "@/components/core/IproButton";

const InvoicesFilterBody = () => {
  return (
    <Stack>
      <Text size="sm">You can filter invoices by dates, customer and status wise</Text>
      <Grid grow>
        <Grid.Col span={6}>
          <DateInput label="Start Date" placeholder="Enter Start Date" valueFormat="YYYY MMM DD" size="sm" />
        </Grid.Col>
        <Grid.Col span={6}>
          <DateInput label="End Date" placeholder="Enter End Date" valueFormat="YYYY MMM DD" size="sm" />
        </Grid.Col>
        <Grid.Col span={6}>
          <MultiSelect
            label="Invoice Status"
            placeholder="Select User Roles to Filter"
            data={["Paid", "Half Paid", "Full Paid"]}
            defaultValue={["All"]}
            clearable
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <MultiSelect
            label="Customers"
            placeholder="Select User Roles to Filter"
            data={["Customer Name 1", "Customer Name 2", "Customer Name 3"]}
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

export default InvoicesFilterBody;
