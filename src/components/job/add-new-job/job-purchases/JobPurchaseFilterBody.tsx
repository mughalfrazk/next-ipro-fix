"use client";

import { Stack, Text, Grid, MultiSelect } from "@mantine/core";
import IproButton from "@/components/core/IproButton";
import { DateInput } from "@mantine/dates";

const JobPurchaseFilterBody = () => {
  return (
    <Stack>
      <Text size="sm">You can filter purchases with date range and suppliers</Text>
      <Grid grow>
        <Grid.Col span={6}>
          <DateInput label="Start Date" placeholder="Enter Start Date" valueFormat="YYYY MMM DD" size="sm" />
        </Grid.Col>
        <Grid.Col span={6}>
          <DateInput label="End Date" placeholder="Enter End Date" valueFormat="YYYY MMM DD" size="sm" />
        </Grid.Col>
        <Grid.Col span={6}>
          <MultiSelect
            label="Supplier"
            placeholder="Select Job Type to Filter"
            data={["Khan Mobile", "SK Mobiles", "Apple Man"]}
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
export default JobPurchaseFilterBody;
