"use client";

import {
  Card,
  Divider,
  Grid,
  GridCol,
  Group,
  Stack,
} from "@mantine/core";

import Heading from "../../common/Heading";
import CustomerDetail from "./CustomerDetail";
import CommentDrawer from "./CommentDrawer";
import IssuesListForm from "./IssuesListForm";
import { createJobAction } from "@/lib/actions/job.action";
import { useFormAction } from "@/hooks/use-form-action";
import IproButton from "@/components/core/IproButton";
import TechnicianSelect from "./TechnicianSelect";

const JobDetailTab = () => {
  const { formAction } = useFormAction(createJobAction, {});


  return (
    <form action={formAction}>
      <Stack gap={0}>
        <CommentDrawer />
        <Grid>
          <GridCol span={8}>
            <CustomerDetail />
          </GridCol>
          <GridCol span={4}>
            <Card bg="var(--mantine-color-primary-6)">
              <Heading
                title="Assign Job"
                description="Assign job to a staff member"
                color="white"
              />
              <Divider mt={10} mb={20} opacity={0} />

              <TechnicianSelect />
            </Card>
          </GridCol>
          <GridCol span={12}>
            <Card pb={100}>
              <Heading
                title="Job Details"
                description="Add multiple jobs by clicking the + icon at the end"
              />
              <Divider mt={10} mb={20} />

              <IssuesListForm />

              <Group justify="flex-end" mt={20}>
                <IproButton variant="outline">
                  Cancal
                </IproButton>
                <IproButton isSubmit={true}>
                  Save Job
                </IproButton>
              </Group>
            </Card>
          </GridCol>
        </Grid>
      </Stack>
    </form>
  );
};

export default JobDetailTab;
