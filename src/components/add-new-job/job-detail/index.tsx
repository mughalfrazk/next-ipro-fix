'use client'

import {
  Badge,
  Card,
  Divider,
  Grid,
  GridCol,
  Group,
  Stack,
} from '@mantine/core'

import Heading from "../../common/Heading";
import CustomerDetail from "./CustomerDetail";
import CommentDrawer from "./CommentDrawer";
import IssuesListForm from "./IssuesListForm";
import { createJobAction } from "@/lib/actions/job.action";
import { useFormAction } from "@/hooks/use-form-action";
import IproButton from "@/components/core/IproButton";
import TechnicianSelect from "./TechnicianSelect";
import InvoiveReceiptDrawer from './InvoiceReceiptDrawer'

const JobDetailTab = () => {
  const { formAction, getFieldErrorProps } = useFormAction(createJobAction, {});

  return (
    <form action={formAction}>
      <Stack gap={0}>
        {!!job && <CommentDrawer />}
        <Grid>
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

              <TechnicianSelect technician={job?.technician} getFieldErrorProps={getFieldErrorProps} />
            </Card>
          </GridCol>
          <GridCol span={12}>
            <Card pb={100}>
              <Group justify="space-between">
                <Heading
                  title="Job Details"
                  description="Add multiple jobs by clicking the + icon at the end"
                />
                {getFieldErrorProps('issues').error && (
                  <Badge color="red">Please fill all the issues details</Badge>
                )}
              </Group>
              <Divider mt={10} mb={20} />

              <IssuesListForm job={job} getFieldErrorProps={getFieldErrorProps} />

              <Group justify="flex-end" mt={20}>
                <Group mr={130}>
                  <InvoiveReceiptDrawer />
                </Group>
                <IproButton variant="outline">Cancal</IproButton>
                <IproButton isSubmit={true}>Save Job</IproButton>
              </Group>
            </Card>
          </GridCol>
        </Grid>
      </Stack>
    </form>
  )
}

export default JobDetailTab
