"use client";

import { Avatar, Grid, Group, Stack, Text, Card } from "@mantine/core";
import {
  IconWallet,
  IconCircleMinus,
  IconMoneybag,
  IconCoins
} from "@tabler/icons-react";
const TopCards = () => {
  return (
    <Grid>
      <Grid.Col span={3}>
        <Card>
          <Group>
            <Avatar bg="green.2" size="4rem" radius="xl">
              <IconWallet
                stroke={1.2}
                color="var(--mantine-color-green-7)"
                size="1.9rem"
              />
            </Avatar>
            <Stack gap={0}>
              <Text size="md" c="gray.6">
                Total Cash In
              </Text>
              <Text c="green.7" size="xl" fw={600}>
                AED 3,414,561
              </Text>
            </Stack>
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card>
          <Group>
            <Avatar bg="cyan.1" size="4rem" radius="xl">
              <IconCircleMinus
                stroke={1.2}
                color="var(--mantine-color-cyan-6)"
                size="1.9rem"
              />
            </Avatar>
            <Stack gap={0}>
              <Text size="md" c="gray.6">
                Total Cash Out
              </Text>
              <Text c="cyan.6" size="xl" fw={600}>
                AED 3,414,561
              </Text>
            </Stack>
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card>
          <Group>
            <Avatar bg="blue.1" size="4rem" radius="xl">
              <IconMoneybag
                stroke={1.2}
                color="var(--mantine-color-blue-6)"
                size="1.9rem"
              />
            </Avatar>
            <Stack gap={0}>
              <Text size="md" c="gray.6">
                Total Cash In Hand
              </Text>
              <Text c="blue.6" size="xl" fw={600}>
                AED 3,414,561
              </Text>
            </Stack>
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card>
          <Group>
            <Avatar bg="indigo.1" size="4rem" radius="xl">
              <IconCoins
                stroke={1.2}
                color="var(--mantine-color-indigo-6)"
                size="1.9rem"
              />
            </Avatar>
            <Stack gap={0}>
              <Text size="md" c="gray.6">
                Opening Balance
              </Text>
              <Text c="indigo.6" size="xl" fw={600}>
                AED 3,414,561
              </Text>
            </Stack>
          </Group>
        </Card>
      </Grid.Col>
    </Grid>
  );
};

export default TopCards;
