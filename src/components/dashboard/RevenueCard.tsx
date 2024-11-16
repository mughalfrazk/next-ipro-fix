"use client";

import { Card, Group, Stack, Title, Text, CardProps } from "@mantine/core";
import { BarChart } from "@mantine/charts";

import GrowthBadge from "../common/GrowthBadge";
import { useMantineColorScheme } from "@/hooks/use-mantine-color-scheme-wrapper";
import { useScreenSize } from "@/hooks/use.screen-size";

const RevenueCard = ({ ...props }: CardProps) => {
  const { isLargeDesktop, isDesktop } = useScreenSize();
  const { lightDark } = useMantineColorScheme();

  const chart02 = [
    { week: "Mon", Smartphones: 750 },
    { week: "Tue", Smartphones: 550 },
    { week: "Wed", Smartphones: 350 },
    { week: "Thu", Smartphones: 300 },
    { week: "Fri", Smartphones: 320 },
    { week: "Sat", Smartphones: 350 },
    { week: "Sun", Smartphones: 500 }
  ];

  return (
    <Card {...props}>
      <Group h={"100%"} justify="space-between" align="flex-end">
        <Stack h="100%" justify="space-between">
          <Stack gap={4}>
            <Title order={4}>Revenue Growth</Title>
            <Title order={6} fw={600}>
              Weekly Report
            </Title>
          </Stack>
          <Stack gap={0}>
            <Title order={3}>$25,245</Title>
            <Group align="center" gap={10} mt={5}>
              <GrowthBadge>12</GrowthBadge>
              <Text size="xs">vs last week</Text>
            </Group>
          </Stack>
        </Stack>
        <BarChart
          h={170}
          w={isLargeDesktop ? 340 : isDesktop ? 460 : 250}
          data={chart02}
          dataKey="week"
          valueFormatter={(value) => new Intl.NumberFormat("en-US").format(value)}
          series={[{ name: "Smartphones", color: "primary.6" }]}
          xAxisProps={{ fontWeight: "bold", tickMargin: 0 }}
          barProps={{
            radius: 5,
            background: {
              fill: lightDark("#eeeeee9e", "#eeeeee1e"),
              radius: 5
            }
          }}
          tickLine="none"
          gridAxis="none"
          withYAxis={false}
          maxBarWidth={15}
        />
      </Group>
    </Card>
  );
};

export default RevenueCard;
