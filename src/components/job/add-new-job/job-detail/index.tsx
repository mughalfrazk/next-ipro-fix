"use client";

import { Badge, Card, Divider, Grid, GridCol, Group, Stack } from "@mantine/core";

import { createJobAction, updateJobAction } from "@/lib/actions/job.action";
import CreateUpdateSelectInput from "@/components/common/CreateUpdateSelectInput";
import { getJobStatusListApi } from "@/lib/services/api/job-status.service";
import { JobModel } from "@/lib/models/job.model";
import { useFormAction } from "@/hooks/use-form-action";
import IproTextInput from "@/components/core/IproTextInput";
import IproButton from "@/components/core/IproButton";
import TechnicianSelect from "./TechnicianSelect";
import Heading from "@/components/common/Heading";
import CustomerDetail from "./CustomerDetail";
import CommentDrawer from "./CommentDrawer";
import IssuesListForm from "./IssuesListForm";
import JobStickerModal from "./JobStickerModal";
import { useDisclosure } from "@mantine/hooks";

const JobDetailTab = ({ job }: { job?: JobModel }) => {
  const { formAction, getFieldErrorProps } = useFormAction(
    job ? updateJobAction : createJobAction,
    {}
  );
  const [opened, { open, close }] = useDisclosure();
  const getJobStatusList = async () => {
    const result = await getJobStatusListApi();
    return result.map((item) => ({
      label: item.name,
      value: String(item.id)
    }));
  };
  return (
    <>
      <JobStickerModal opened={opened} close={close} />
      <form action={formAction}>
        <Stack gap={0}>
          {!!job && <CommentDrawer job={job} />}
          <Grid>
            {!!job && <IproTextInput name="id" defaultValue={job.id} display={"none"} />}
            <GridCol span={8}>
              <CustomerDetail customer={job?.customer} getFieldErrorProps={getFieldErrorProps} />
            </GridCol>
            <GridCol span={4}>
              <Card bg="var(--mantine-color-primary-6)">
                <Heading
                  title="Assign Job"
                  description="Assign job to a staff member"
                  color="white"
                />
                <Divider mt={10} mb={20} opacity={0} />

                <TechnicianSelect
                  technician={job?.technician}
                  getFieldErrorProps={getFieldErrorProps}
                />
              </Card>
            </GridCol>
            <GridCol span={12}>
              <Card pb={100}>
                <Group justify="space-between">
                  <Heading
                    title="Job Details"
                    description="Add multiple jobs by clicking the + icon at the end"
                  />
                  {getFieldErrorProps("issues").error && (
                    <Badge color="red">Please fill all the issues details</Badge>
                  )}
                  {job && (
                    <Group>
                      Job Status:
                      <CreateUpdateSelectInput
                        searchable
                        name="job_status_id"
                        inputDefaultValue={job?.job_status.id}
                        getDataFromApiAndSetOption={getJobStatusList}
                      />
                    </Group>
                  )}
                </Group>
                <Divider mt={10} mb={20} />

                <IssuesListForm job={job} getFieldErrorProps={getFieldErrorProps} />

                {!job ? (
                  <Group justify="flex-end" mt={20}>
                    <IproButton variant="outline">Cancal</IproButton>
                    <IproButton isSubmit={true}>Save Job</IproButton>
                  </Group>
                ) : (
                  <Group justify="flex-end" mt={20}>
                    <IproButton variant="outline">Cancal</IproButton>
                    <IproButton isSubmit={true}>Update Job</IproButton>
                  </Group>
                )}
              </Card>
            </GridCol>
          </Grid>
        </Stack>
      </form>
    </>
  );
};

export default JobDetailTab;
