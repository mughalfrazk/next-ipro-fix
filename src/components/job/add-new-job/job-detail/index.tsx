"use client";

import {
  Avatar,
  Badge,
  Card,
  Divider,
  Grid,
  GridCol,
  Group,
  rem,
  Stack,
  Text,
  ThemeIcon,
  Title
} from "@mantine/core";

import { createJobAction, updateJobAction } from "@/lib/actions/job.action";
import { JobModel } from "@/lib/models/job.model";
import { useFormAction } from "@/hooks/use-form-action";
import IproTextInput from "@/components/core/IproTextInput";
import IproButton from "@/components/core/IproButton";
import Heading from "@/components/common/Heading";
import CustomerDetail from "./CustomerDetail";
import CommentDrawer from "./CommentDrawer";
import IssuesListForm from "./IssuesListForm";

import { IconInnerShadowBottomRightFilled } from "@tabler/icons-react";
import { colorForUserRole } from "@/utils/functions";
import ActionBar from "./ActionBar";

const JobDetailTab = ({ job }: { job?: JobModel }) => {
  const { formAction, getFieldErrorProps } = useFormAction(
    job ? updateJobAction : createJobAction,
    {}
  );

  return (
    <form action={formAction}>
      <Stack gap={0}>
        {!!job && <CommentDrawer job={job} />}
        <Grid>
          {!!job && <IproTextInput name="id" defaultValue={job.id} display={"none"} />}
          {!!job && <ActionBar job={job} />}
          <GridCol span={!!job ? 9 : 12}>
            <CustomerDetail customer={job?.customer} getFieldErrorProps={getFieldErrorProps} />
          </GridCol>
          {!!job && (
            <GridCol span={3}>
              <Card>
                <Heading
                  title="Assigned Staff"
                  description="The detail of the staff holding the device(s)."
                />
                <Divider mt={10} mb={20} />
                <Group gap={20} py={5.4} px={12}>
                  <Avatar
                    size="lg"
                    color="initials"
                    alt={`${job.staff?.first_name} ${job.staff?.last_name}`}
                    name={`${job.staff?.first_name} ${job.staff?.last_name}`}
                  ></Avatar>
                  <Stack gap={0}>
                    <Title order={4}>{`${job.staff?.first_name} ${job.staff?.last_name}`}</Title>
                    <Group gap={0} ms={-8} align="center">
                      <ThemeIcon
                        variant="outline"
                        color={colorForUserRole(job.staff?.role?.name)}
                        style={{ border: 0, padding: 0 }}
                        size="md"
                      >
                        <IconInnerShadowBottomRightFilled
                          style={{ width: rem(16), height: rem(16) }}
                        />
                      </ThemeIcon>
                      <Text
                        size={"0.7rem"}
                        lts={0.6}
                      >{`${job.staff?.role.name.toUpperCase()}`}</Text>
                    </Group>
                  </Stack>
                </Group>
              </Card>
            </GridCol>
          )}
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
  );
};

export default JobDetailTab;
