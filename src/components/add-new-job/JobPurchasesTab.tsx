import { Card, Divider, Grid, GridCol, Group } from "@mantine/core";
import Heading from "../common/Heading";
import IproSelect from "../core/IproSelect";
import IproTextInput from "../core/IproTextInput";
import { IconSquareRoundedPlusFilled } from "@tabler/icons-react";

const JobPurchasesTab = () => {
  return (
    <Card>
      <Heading
        title="Job Purchase Details"
        description="Add new Purchase for this job by clicking + icon"
      />
      <Divider mt={10} mb={20} />
      <Grid>
        <GridCol span={4}>
          <IproSelect label="Brand Name" size="md" />
        </GridCol>
        <GridCol span={4}>
          <IproTextInput name="phone" label="Model Selection" />
        </GridCol>
        <GridCol span={4}>
          <IproTextInput name="company_name" label="Quantity" />
        </GridCol>
        <GridCol span={8}>
          <IproTextInput name="name" label="Parts" />
        </GridCol>
        <GridCol span={4}>
          <IproTextInput name="phone" label="Total" />
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
  );
};

export default JobPurchasesTab;
