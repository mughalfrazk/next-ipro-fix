import { Stack, Text, Grid, MultiSelect } from "@mantine/core";
import IproButton from "../core/IproButton";
import { DateInput } from "@mantine/dates";

const JobFilterBody = () => {
  return (
    <Stack>
      <Text size="sm">You can filter jobs with date range job type customer technician status and company name</Text>
      <Grid grow>
        <Grid.Col span={6}>
          <DateInput label="Start Date" placeholder="Enter Start Date" valueFormat="YYYY MMM DD" size="sm" />
        </Grid.Col>
        <Grid.Col span={6}>
          <DateInput label="End Date" placeholder="Enter End Date" valueFormat="YYYY MMM DD" size="sm" />
        </Grid.Col>
      </Grid>
      <Grid grow>
        <Grid.Col span={2}>
          <MultiSelect label="Job Type" placeholder="Select Job Type to Filter" data={["SW", "HW", "AW", "GW"]} defaultValue={["All"]} clearable />
        </Grid.Col>
        <Grid.Col span={2}>
          <MultiSelect
            label="Customer"
            placeholder="Select Customer Name to Filter"
            data={["Customer 1", "Customer 2", "Customer 3"]}
            defaultValue={["All"]}
            clearable
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <MultiSelect
            label="Assigned To"
            placeholder="Select User Name to Filter"
            data={["Technician 1", "Technician 2", "Technician 3"]}
            defaultValue={["All"]}
            clearable
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <MultiSelect
            label="Job Status"
            placeholder="Select Job Status to Filter"
            data={["Pending Work", "Device Received", "Job Done", "Delivered"]}
            defaultValue={["All"]}
            clearable
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <MultiSelect
            label="Company Name"
            placeholder="Select Company Name to Filter"
            data={["Company Name 1", "Company Name 2", "Company Name 3"]}
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
export default JobFilterBody;
