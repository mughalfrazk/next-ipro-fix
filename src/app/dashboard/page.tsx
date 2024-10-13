import {
  Avatar,
  Card,
  Grid,
  GridCol,
  Group,
  NumberFormatter,
  ProgressLabel,
  ProgressRoot,
  ProgressSection,
  ScrollArea,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconCash, IconMoneybag } from "@tabler/icons-react";

import Heading from "@/components/common/Heading";
import RevenueCard from "@/components/dashboard/RevenueCard";
import TotalJobsCard from "@/components/dashboard/TotalJobsCard";
import IncomeExpenseCard from "@/components/dashboard/IncomeExpenseCard";
import JobTypesGraphCard from "@/components/dashboard/JobTypesGraphCard";

const Page = async () => {
  const staff = [
    {
      name: "Eleanor Pena",
      noOfJobs: 230,
      amount: 6325,
      progress: 75,
    },
    {
      name: "Brooklyn Simmons",
      noOfJobs: 150,
      amount: 7630,
      progress: 55,
    },
    {
      name: "Kathryn Murphy",
      noOfJobs: 230,
      amount: 6325,
      progress: 75,
    },
    {
      name: "Guy Hawkins",
      noOfJobs: 230,
      amount: 6325,
      progress: 75,
    },
    {
      name: "Darlene Robertson",
      noOfJobs: 230,
      amount: 6325,
      progress: 75,
    },
    {
      name: "Eleanor Pena",
      noOfJobs: 230,
      amount: 6325,
      progress: 75,
    },
    {
      name: "Brooklyn Simmons",
      noOfJobs: 150,
      amount: 7630,
      progress: 55,
    },
    {
      name: "Kathryn Murphy",
      noOfJobs: 230,
      amount: 6325,
      progress: 75,
    },
    {
      name: "Guy Hawkins",
      noOfJobs: 230,
      amount: 6325,
      progress: 75,
    },
    {
      name: "Darlene Robertson",
      noOfJobs: 230,
      amount: 6325,
      progress: 75,
    },
  ];

  const jobStatuses = [
    {
      name: "Device Received",
      noOfJobs: 120,
    },
    {
      name: "Pending Work",
      noOfJobs: 303,
    },
    {
      name: "Pending Approval",
      noOfJobs: 123,
    },
    {
      name: "Job Done",
      noOfJobs: 433,
    },
    {
      name: "Delivered",
      noOfJobs: 766,
    },
  ];

  return (
    <Stack>
      <Grid>
        <GridCol span={{ sm: 4, lg: 2, base: 12 }}>
          <TotalJobsCard p={20} h={220} />
        </GridCol>
        <GridCol span={{ sm: 4, lg: 2, base: 12 }}>
          <IncomeExpenseCard
            icon={<IconCash style={{ width: "70%", height: "70%" }} />}
            iconColor="grape"
            amount={10245}
            percentage={12}
            p={20}
            h={220}
          >
            Total
            <br />
            Expense
          </IncomeExpenseCard>
        </GridCol>
        <GridCol span={{ sm: 4, lg: 2, base: 12 }}>
          <IncomeExpenseCard
            icon={<IconMoneybag style={{ width: "70%", height: "70%" }} />}
            iconColor="orange.6"
            amount={2024}
            percentage={15}
            loss
            p={20}
            h={220}
          >
            Total
            <br />
            Expense
          </IncomeExpenseCard>
        </GridCol>
        <GridCol span={{ sm: 12, lg: 6, base: 12 }}>
          <RevenueCard p={20} h={220} />
        </GridCol>
        <GridCol span={{ sm: 8, lg: 4, base: 12 }}>
          <Card p={20} h={500}>
            <Heading
              title="Staff Working Progress"
              description="Jobs done, earned income and target"
            />
            <ScrollArea mt={10}>
              {staff.map((item) => (
                <Group
                  justify="space-between"
                  align="center"
                  py={12}
                  classNames={{ root: "borderedListItem" }}
                  style={{
                    borderBottom:
                      "1px solid var(--mantine-color-default-border)",
                  }}
                >
                  <Group>
                    <Avatar name={item.name} color="initials" />
                    <Stack gap={0}>
                      <Text>{item.name}</Text>
                      <Text size="sm" opacity={0.7}>
                        Jobs - {item.noOfJobs}
                      </Text>
                    </Stack>
                  </Group>
                  <Stack gap={0} ta="right">
                    <Text fw="bold" c="primary.6" size="sm">
                      <NumberFormatter
                        prefix="AED "
                        value={item.amount}
                        thousandSeparator
                      />
                    </Text>
                    <ProgressRoot size="xl" w={150} radius="sm">
                      <ProgressSection value={item.progress} color="primary.6">
                        <ProgressLabel>{item.progress}%</ProgressLabel>
                      </ProgressSection>
                    </ProgressRoot>
                  </Stack>
                </Group>
              ))}
            </ScrollArea>
          </Card>
        </GridCol>
        <GridCol
          span={{ lg: 5, base: 7 }}
          display={{ lg: "block", base: "none" }}
        >
          <JobTypesGraphCard p={20} h={500} />
        </GridCol>
        <GridCol span={{ sm: 4, lg: 3, base: 12 }}>
          <Card p={20} h={500}>
            <Heading
              title="Job Reports"
              description="Number of job status wise"
            />
            <ScrollArea mt={10}>
              {jobStatuses.map((item) => (
                <Group
                  justify="space-between"
                  align="center"
                  py={17}
                  classNames={{ root: "borderedListItem" }}
                  style={{
                    borderBottom:
                      "1px solid var(--mantine-color-default-border)",
                  }}
                >
                  <Group>
                    <Avatar name={item.name} color="initials" />
                    <Text>{item.name}</Text>
                  </Group>
                  <Title order={4}>{item.noOfJobs}</Title>
                </Group>
              ))}
            </ScrollArea>
          </Card>
        </GridCol>
        <GridCol span={12} display={{ lg: "none", base: "block" }}>
          <JobTypesGraphCard p={20} h={{ lg: 500 }} />
        </GridCol>
      </Grid>
    </Stack>
  );
};

export default Page;
