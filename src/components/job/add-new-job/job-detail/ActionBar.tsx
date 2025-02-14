import React, { useEffect, useState } from "react";
import { Badge, Card, GridCol, Group, rem, Text } from "@mantine/core";

import { colorForJobStatus, showErrorNotification, showNotification } from "@/utils/functions";
import { IconAlertCircleFilled, IconBarcode, IconUserFilled } from "@tabler/icons-react";
import ConfirmationModel from "@/components/common/ConfirmationDialog";
import IproButton from "@/components/core/IproButton";
import IproModal from "@/components/core/IproModal";
import JobStickerModal from "./JobStickerModal";
import StaffSelect from "./StaffSelect";
import { rejectJobApi, updateJobOptionalApi } from "@/lib/services/api/job.service";
import { JobModel } from "@/lib/models/job.model";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { getFormattedError } from "@/utils/format-error";

const ActionBar = ({ job }: { job: JobModel }) => {
  const router = useRouter();
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
      await updateJobOptionalApi(job.id, { staff_id: selectedStaff });
      closeAssignmentModal();
      router.refresh();
    } catch (error) {
      showErrorNotification(getFormattedError(error)?.errors?.formErrors?.[0]);
    } finally {
      setAssignStaffLoading(false);
    }
  };

  useEffect(() => {
    console.log("selectedStaff: ", selectedStaff);
  }, [selectedStaff]);

  return (
    <>
      <IproModal
        title="Assign job to staff"
        opened={openedAssignmentModal}
        onClose={closeAssignmentModal}
        confirmButtonText="Update"
        confirmButtonLoading={assignStaffLoading}
        moveFormard={assignStaffHandler}
      >
        <StaffSelect staff={job.staff} setSelectedStaff={setSelectedStaff} />
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
                    leftSection={<IconUserFilled style={{ width: rem(20), height: rem(20) }} />}
                    onClick={openAssignmentModal}
                  >
                    Assign to staff
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
