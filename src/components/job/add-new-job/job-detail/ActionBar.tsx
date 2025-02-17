import React, { useState } from "react";
import { Badge, Card, GridCol, Group, rem, Text } from "@mantine/core";

import { colorForJobStatus, showErrorNotification, showNotification } from "@/utils/functions";
import {
  IconAlertCircleFilled,
  IconBarcode,
  IconCircleDashedCheck,
  IconClipboardData,
  IconUserFilled
} from "@tabler/icons-react";
import { assignStaffToJobApi, rejectJobApi } from "@/lib/services/api/job.service";
import ConfirmationModel from "@/components/common/ConfirmationDialog";
import { useProfileContext } from "@/context/profile.context";
import { getFormattedError } from "@/utils/format-error";
import IproButton from "@/components/core/IproButton";
import IproModal from "@/components/core/IproModal";
import { JobModel } from "@/lib/models/job.model";
import JobStickerModal from "./JobStickerModal";
import { RoleTypes } from "@/types/roles.types";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import StaffSelect from "./StaffSelect";

const ActionBar = ({ job }: { job: JobModel }) => {
  const router = useRouter();
  const {
    data: { role }
  } = useProfileContext();

  const [opened, { open, close }] = useDisclosure(false);
  const [openedBarcodeModal, { open: openBarcodeModal, close: closeBarcodeModal }] =
    useDisclosure(false);
  const [openedAssignmentModal, { open: openAssignmentModal, close: closeAssignmentModal }] =
    useDisclosure(false);

  const [rejectLoading, setRejectLoading] = useState<boolean>(false);
  const [assignStaffLoading, setAssignStaffLoading] = useState<boolean>(false);
  const [selectedStaff, setSelectedStaff] = useState<string>("");

  const rejectJobHandler = async () => {
    if (!job?.id) return showErrorNotification("Invalid Job");

    setRejectLoading(true);
    try {
      await rejectJobApi(job.id);
      showNotification("Job marked as rejected");
      close();
      router.refresh();
    } catch (error) {
      showErrorNotification(getFormattedError(error)?.errors?.formErrors?.[0]);
    } finally {
      setRejectLoading(false);
    }
  };

  const assignStaffHandler = async () => {
    setAssignStaffLoading(true);

    if (!selectedStaff) {
      showErrorNotification("Select a staff member from the list.");
      return;
    }

    if (selectedStaff === job?.staff?.id) {
      showErrorNotification("Same staff selected again.");
      return;
    }

    selectedStaff;
    try {
      await assignStaffToJobApi(job.id, selectedStaff);
      closeAssignmentModal();

      if (role.name === RoleTypes.STAFF) {
        router.push("/dashboard/job");
        router.refresh();
      } else {
        router.refresh();
      }
    } catch (error) {
      showErrorNotification(getFormattedError(error)?.errors?.formErrors?.[0]);
    } finally {
      setAssignStaffLoading(false);
    }
  };

  return (
    <>
      <IproModal
        title="Assign job to staff"
        opened={openedAssignmentModal}
        onClose={closeAssignmentModal}
        confirmButtonText={
          role.name === RoleTypes.TECHNICIAN
            ? "Complete Job"
            : role.name === RoleTypes.STAFF
              ? "Assign to Technician"
              : "Assign to Staff"
        }
        confirmButtonLoading={assignStaffLoading}
        moveFormard={assignStaffHandler}
      >
        <Text mb={10}>
          {role.name === RoleTypes.TECHNICIAN
            ? "Mark job as complete and assign it back to the receptionist"
            : role.name === RoleTypes.STAFF
              ? "To start the work on the job, assign it to technician"
              : "Assign the job to a staff member to make it in progress."}
        </Text>

        <StaffSelect
          speciality={job.problem_type}
          staff={job.staff}
          setSelectedStaff={setSelectedStaff}
        />
      </IproModal>
      <IproModal
        title="Job Barcode"
        opened={openedBarcodeModal}
        onClose={closeBarcodeModal}
        pos="relative"
      >
        <JobStickerModal job={job} />
      </IproModal>
      <ConfirmationModel action={rejectJobHandler} disclosure={{ opened, close }}>
        Are you sure you want to reject the job?
      </ConfirmationModel>
      <GridCol span={12}>
        <Card
          py={12}
          style={{
            borderLeft: `1.5rem solid var(--mantine-color-${colorForJobStatus(job.job_status.name).replace(".", "-")})`
          }}
        >
          <Group justify="space-between">
            <Group>
              <Text>Job status is: </Text>
              <Badge
                color={colorForJobStatus(job.job_status.name)}
                radius="md"
                size="sm"
                px={10}
                pt={10}
                pb={9}
              >
                <Text size="10" fw="bold" c="white">
                  {job.job_status.name}
                </Text>
              </Badge>
            </Group>
            <Group gap={8}>
              {job.job_status.name !== "Job Lost" && (
                <>
                  <IproButton
                    variant="outline"
                    color="red"
                    onClick={open}
                    loading={rejectLoading}
                    style={{ borderColor: "var(--mantine-color-red)" }}
                    size="md"
                    leftSection={<IconAlertCircleFilled />}
                  >
                    Reject Job
                  </IproButton>
                  <IproButton size="md" leftSection={<IconBarcode />} onClick={openBarcodeModal}>
                    Show Barcode
                  </IproButton>
                  <IproButton
                    size="md"
                    leftSection={
                      role.name === RoleTypes.TECHNICIAN ? (
                        <IconCircleDashedCheck style={{ width: rem(22), height: rem(22) }} />
                      ) : role.name === RoleTypes.STAFF ? (
                        <IconClipboardData style={{ width: rem(22), height: rem(22) }} />
                      ) : (
                        <IconUserFilled style={{ width: rem(20), height: rem(20) }} />
                      )
                    }
                    onClick={openAssignmentModal}
                  >
                    {role.name === RoleTypes.TECHNICIAN
                      ? "Complete job"
                      : role.name === RoleTypes.STAFF
                        ? "Assign to Technician"
                        : "Assign to Staff"}
                  </IproButton>
                </>
              )}
            </Group>
          </Group>
        </Card>
      </GridCol>
    </>
  );
};

export default ActionBar;
