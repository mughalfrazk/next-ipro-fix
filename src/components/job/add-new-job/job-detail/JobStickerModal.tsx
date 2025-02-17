"use client";

import { ReactBarcode } from "react-jsbarcode";
import { Stack, Center, Group, Text, Paper, Divider } from "@mantine/core";

import { JobModel } from "@/lib/models/job.model";

const JobStickerModal = ({ job }: { job: JobModel }) => {
  return (
    <Center>
      <Stack>
        <Paper bd="1px solid var(--mantine-color-default-border)" p={15} w={400}>
          <Stack justify="center" align="center" gap={2}>
            <Text size="md">Customer Name</Text>
            <Text size="xl" fw={600}>
              Jhon Doe
            </Text>
          </Stack>
          <Divider color="var(--mantine-color-default-border)" size="sm" my="sm" variant="dashed" />
          <Group justify="space-between" px={25}>
            <Text size="md" fw={600}>
              Charges
            </Text>
            <Text size="md" fw={600}>
              AED 452.99
            </Text>
          </Group>
          <Divider color="var(--mantine-color-default-border)" size="sm" my="sm" variant="dashed" />
          <Center>
            {job?.barcode && <ReactBarcode value={job?.barcode} options={{ format: "code39" }} />}
          </Center>
        </Paper>
      </Stack>
    </Center>
  );
};

export default JobStickerModal;
