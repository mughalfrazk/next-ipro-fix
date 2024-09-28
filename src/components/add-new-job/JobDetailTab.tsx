import {
  Card,
  Divider,
  Grid,
  GridCol,
  Group,
  Radio,
  Stack,
  Title,
} from "@mantine/core";
import { IconSquareRoundedPlusFilled } from "@tabler/icons-react";

import IproTextInput from "../core/IproTextInput";
import IproSelect from "../core/IproSelect";
import Heading from "../common/Heading";

const JobDetailTab = () => {
  return (
    <form>
      <Stack>
        <Grid>
          <GridCol span={8}>
            <Card>
              <Heading
                title="Customer Details"
                description="Fill out the customer details to create a new Job"
              />
              <Divider mt={10} mb={20} />

              <Grid>
                <GridCol span={4}>
                  <IproTextInput name="name" label="Customer Name" />
                </GridCol>
                <GridCol span={4}>
                  <IproTextInput name="phone" label="Mobile Number" />
                </GridCol>
                <GridCol span={4}>
                  <IproTextInput name="company_name" label="Company Name" />
                </GridCol>
              </Grid>
            </Card>
          </GridCol>
          <GridCol span={4}>
            <Card bg="var(--mantine-color-primary-6)">
              <Heading
                title="Assign Job"
                description="Assign job to a staff member"
                color="white"
              />
              <Divider mt={10} mb={20} opacity={0} />

              <IproSelect
                size="md"
                label="Staff Member"
                data={["React", "Angular", "Vue", "Svelte"]}
                styles={{
                  label: {
                    color: "white",
                  },
                  input: {
                    backgroundColor: "transparent",
                    borderColor: "white",
                    color: "white",
                  },
                }}
              />
            </Card>
          </GridCol>
          <GridCol span={12}>
            <Card>
              <Heading
                title="Job Details"
                description="Add multiple jobs by clicking the + icon at the end"
              />
              <Divider mt={10} mb={20} />

              <Grid>
                <GridCol span={12}>
                  <Group mt={10} mb={20}>
                    <Title order={5}>Problem Type:</Title>
                    <Radio
                      name="problem_type_id"
                      color="var(--mantine-color-primary-6)"
                      label="SW-Software"
                    />
                    <Radio
                      name="problem_type_id"
                      color="var(--mantine-color-primary-6)"
                      label="HW-Hardware"
                    />
                    <Radio
                      name="problem_type_id"
                      color="var(--mantine-color-primary-6)"
                      label="GW-Android"
                    />
                    <Radio
                      name="problem_type_id"
                      color="var(--mantine-color-primary-6)"
                      label="AW-Apple Iphone"
                    />
                  </Group>
                </GridCol>
                <GridCol span={4}>
                  <IproSelect label="Brand Name" size="md" />
                </GridCol>
                <GridCol span={4}>
                  <IproTextInput name="phone" label="Model Selection" />
                </GridCol>
                <GridCol span={4}>
                  <IproTextInput name="company_name" label="Issue" />
                </GridCol>
                <GridCol span={4}>
                  <IproTextInput name="name" label="Quantity" />
                </GridCol>
                <GridCol span={4}>
                  <IproTextInput name="phone" label="Charges" />
                </GridCol>
                <GridCol span={4}>
                  <IproTextInput name="company_name" label="Total" />
                </GridCol>
                <GridCol span={12}>
                  <Group
                    justify="center"
                    w={"100%"}
                    variant="subtle"
                    py={14}
                    opacity={0.3}
                    style={{
                      border: "2px dashed var(--mantine-color-dark-1)",
                      borderRadius: "var(--mantine-radius-default)",
                    }}
                  >
                    <IconSquareRoundedPlusFilled /> Add new task in the job
                  </Group>
                </GridCol>
              </Grid>
            </Card>
          </GridCol>
        </Grid>
      </Stack>
    </form>
  );
};

export default JobDetailTab;
