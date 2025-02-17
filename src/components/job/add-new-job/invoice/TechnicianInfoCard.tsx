import { Avatar, Card, Group, Stack, Title, Text, Center, rem, CardProps } from "@mantine/core";
import { IconUserX } from "@tabler/icons-react";

import Heading from "@/components/common/Heading";
import { InvoiceModel } from "@/lib/models/invoice.model";

type TechnicianInfoCardProps = {
  invoice: InvoiceModel;
} & CardProps;

const TechnicianInfoCard = ({ invoice }: TechnicianInfoCardProps) => (
  <Card mt={15}>
    <Heading title="Job Technician" mb={20} />
    {invoice.technician ? (
      <Stack gap={0}>
        <Group ps={10} mb={20}>
          <Avatar
            name={`${invoice.technician?.first_name} ${invoice.technician?.last_name}`}
            size="lg"
            color="initials"
          />
          <Stack gap={0}>
            <Title order={4} c="primary">
              {`${invoice.technician?.first_name} ${invoice.technician?.last_name}`}
            </Title>
            <Text size="xs">{invoice.technician?.email}</Text>
          </Stack>
        </Group>
        <Group justify="space-between" mb={6}>
          <Text size="sm">Phone no:</Text>
          <Text fw="600">{invoice.technician?.phone}</Text>
        </Group>
        <Group justify="space-between" mb={10}>
          <Text size="sm">Address no:</Text>
          <Text fw="600">{invoice.technician?.address}</Text>
        </Group>
      </Stack>
    ) : (
      <Center opacity={0.3} pb={10}>
        <IconUserX style={{ width: rem(40), height: rem(40) }} />
        <Stack gap={0}>
          <Text ms={15} size="lg" lh={1}>
            No technician
          </Text>
          <Text ms={15} size="lg" lh={1}>
            assigned
          </Text>
        </Stack>
      </Center>
    )}
  </Card>
);

export default TechnicianInfoCard;
