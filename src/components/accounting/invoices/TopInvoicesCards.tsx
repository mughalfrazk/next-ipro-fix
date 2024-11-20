"use client";

import { Avatar, Grid, Group, Stack, Text, Card } from "@mantine/core";
import {
  IconInvoice,
  IconMoneybag,
  IconClockRecord,
  IconCheckbox
} from "@tabler/icons-react";
const TopCards = () => {
  return (
    <Grid>
      <Grid.Col span={3}>
        <Card>
          <Group>
            <Avatar bg="violet.9" size="4rem" radius="xl">
              <IconInvoice stroke={1.2} color="white" size="1.9rem" />
            </Avatar>
            <Stack gap={0}>
              <Text size="md" c="gray.6">
                Total Invoices
              </Text>
              <Text c="violet.9" size="xl" fw={600}>
                AED 556.523
              </Text>
            </Stack>
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card>
          <Group>
            <Avatar bg="cyan.6" size="4rem" radius="xl">
              <IconMoneybag stroke={1.2} color="white" size="1.9rem" />
            </Avatar>
            <Stack gap={0}>
              <Text size="md" c="gray.6">
                Total Amount
              </Text>
              <Text c="cyan.6" size="xl" fw={600}>
                AED 556.523
              </Text>
            </Stack>
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card>
          <Group>
            <Avatar bg="teal.6" size="4rem" radius="xl">
              <IconClockRecord stroke={1.2} color="white" size="1.9rem" />
            </Avatar>
            <Stack gap={0}>
              <Text size="md" c="gray.6">
                Total Pending
              </Text>
              <Text c="teal.6" size="xl" fw={600}>
                AED 556.523
              </Text>
            </Stack>
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card>
          <Group>
            <Avatar bg="blue.6" size="4rem" radius="xl">
              <IconCheckbox stroke={1.2} color="white" size="1.9rem" />
            </Avatar>
            <Stack gap={0}>
              <Text size="md" c="gray.6">
                Total Paid
              </Text>
              <Text c="blue.6" size="xl" fw={600}>
                AED 556.523
              </Text>
            </Stack>
          </Group>
        </Card>
      </Grid.Col>
    </Grid>
  );
};

export default TopCards;