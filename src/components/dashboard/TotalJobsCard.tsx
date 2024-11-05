"use client";

import { Card, Group, Stack, Title, CardProps } from "@mantine/core";
import { AreaChart } from "@mantine/charts";

import GrowthBadge from "../common/GrowthBadge";

const TotalJobsCard = ({ ...props }: CardProps) => {
  const chart01 = [
    {
      date: "Mar 22",
      Apples: 2890,
    },
    {
      date: "Mar 23",
      Apples: 2756,
    },
    {
      date: "Mar 24",
      Apples: 3322,
    },
    {
      date: "Mar 25",
      Apples: 2508,
    },
    {
      date: "Mar 26",
      Apples: 3129,
    },
  ];

  return (
    <Card {...props}>
      <Stack h="100%" justify="space-between">
        <Stack>
          <Title order={4} mb={7}>
            Total Jobs
          </Title>
          <AreaChart
            h={90}
            data={chart01}
            dataKey="date"
            series={[{ name: "Apples", color: "indigo.6" }]}
            curveType="linear"
            tickLine="none"
            gridAxis="none"
            withXAxis={false}
            withYAxis={false}
            withDots={false}
          />
        </Stack>
        <Group justify="space-between" align="center">
          <Title order={3}>45,098</Title>
          <GrowthBadge>12</GrowthBadge>
        </Group>
      </Stack>
    </Card>
  );
};

export default TotalJobsCard;
