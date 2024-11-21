import {
    Stack,
    Text,
    Grid,
    MultiSelect
  } from "@mantine/core";
  import IproButton from "../core/IproButton";
  import { DateInput } from "@mantine/dates";

const JobFilterBody = () => {
    return (
<Stack>
<Text size="sm">
  You can filter expenses with date range and user
</Text>
<Grid grow>
  <Grid.Col span={6}>
    <DateInput
      label="Start Date"
      placeholder="Enter Start Date"
      valueFormat="YYYY MMM DD"
      size="sm"
    />
  </Grid.Col>
  <Grid.Col span={6}>
    <DateInput
      label="End Date"
      placeholder="Enter End Date"
      valueFormat="YYYY MMM DD"
      size="sm"
    />
  </Grid.Col>
</Grid>
<MultiSelect
  label="User"
  placeholder="Select User Roles to Filter"
  data={["User 1", "User 2", "User 3"]}
  defaultValue={["All"]}
  clearable
/>
<Stack align="start">
  <IproButton>Apply Filter</IproButton>
</Stack>
</Stack>
    )
}
 export default JobFilterBody;