"use client";

import { useEffect, useState } from "react";
import {
  ScrollArea,
  Title,
  Text,
  Avatar,
  Grid,
  Group,
  Card,
  Stack,
  Box,
  NumberFormatter,
  Center,
  Paper
} from "@mantine/core";
import {
  IconChartSankey,
  IconChartHistogram,
  IconRosetteDiscount,
  IconCircleFilled
} from "@tabler/icons-react";
import { DateInput } from "@mantine/dates";

import Heading from "@/components/common/Heading";
import IproButton from "@/components/core/IproButton";
import { getFormattedError } from "@/utils/format-error";
import { PorfitLossDataModel } from "@/lib/models/account.model";
import { getProfitLossByDateApi } from "@/lib/services/api/account.service";
import { colorForProblemType, getYesterdayDate, showErrorNotification } from "@/utils/functions";

const ProfitLossBody = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [profitLossData, setProfitLossData] = useState<PorfitLossDataModel>();

  const getAccountDataHandler = async (s: Date | null, e: Date | null) => {
    if (!s || !e) return;
    if (e < s) {
      setError(true);
      showErrorNotification("End date need to be later than start date.");
      setLoading(false);
      return;
    }
    setError(false);
    e.setHours(23, 59, 59, 999);
    try {
      const result = await getProfitLossByDateApi({
        start_date: s?.toISOString(),
        end_date: e?.toISOString()
      });

      setProfitLossData(result);
    } catch (error) {
      showErrorNotification(getFormattedError(error).errors.formErrors?.[0]);
      console.log("Error: ", getFormattedError(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const start_date = getYesterdayDate();
    const end_date = getYesterdayDate();

    getAccountDataHandler(start_date, end_date);
    setStartDate(start_date);
    setEndDate(end_date);
  }, []);

  return (
    <Grid>
      <Grid.Col span={12}>
        <Card>
          <Grid justify="flex-end">
            <Grid.Col span={5}>
              <DateInput
                label="Start Date"
                placeholder="Enter Start Date"
                valueFormat="YYYY MMM DD"
                size="md"
                value={startDate}
                onChange={setStartDate}
                error={error}
              />
            </Grid.Col>
            <Grid.Col span={5}>
              <DateInput
                label="End Date"
                placeholder="Enter End Date"
                valueFormat="YYYY MMM DD"
                size="md"
                value={endDate}
                onChange={setEndDate}
                error={error}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <Stack justify="flex-end" h="100%" pb={3}>
                <IproButton
                  fullWidth
                  loading={loading}
                  onClick={() => {
                    setLoading(true);
                    getAccountDataHandler(startDate, endDate);
                  }}
                >
                  Apply Filter
                </IproButton>
              </Stack>
            </Grid.Col>
          </Grid>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card bg="var(--mantine-color-grape-1)">
          <Stack gap={0}>
            <Text c="grape.8" size="md">
              Total Sales-Jobs
            </Text>
            <Title fw={700} c="grape.8" order={3}>
              <NumberFormatter
                prefix="AED "
                thousandSeparator
                value={profitLossData?.total_sales ?? 0}
                defaultValue={0}
              />
            </Title>
          </Stack>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card bg="var(--mantine-color-cyan-1)">
          <Stack gap={0}>
            <Text c="cyan.8" size="md">
              Total Purchses
            </Text>
            <Title fw={700} c="cyan.8" order={3}>
              <NumberFormatter
                prefix="AED "
                thousandSeparator
                value={profitLossData?.total_expenses.purchases ?? 0}
                defaultValue={0}
              />
            </Title>
          </Stack>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card bg="var(--mantine-color-blue-1)">
          <Stack gap={0}>
            <Text c="blue.8" size="md">
              Total Job Loses
            </Text>
            <Title fw={700} c="blue.8" order={3}>
              <NumberFormatter
                prefix="AED "
                thousandSeparator
                value={profitLossData?.total_lost_sales ?? 0}
                defaultValue={0}
              />
            </Title>
          </Stack>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card bg="var(--mantine-color-indigo-1)">
          <Stack gap={0}>
            <Text c="indigo.8" size="md">
              Total Gross Profit
            </Text>
            <Title fw={700} c="indigo.8" order={3}>
              <NumberFormatter
                prefix="AED "
                thousandSeparator
                value={profitLossData?.profit?.amount ?? 0}
              />
            </Title>
          </Stack>
        </Card>
      </Grid.Col>
      <Grid.Col span={12}>
        <Heading title="Profit Information" ml={6} mt={10} />
      </Grid.Col>
      <Grid.Col span={6}>
        <Card p="2rem">
          <Stack>
            <Heading title="Profit Total & Margin" opacity={0.8} />
            <Group>
              <Group w="45%">
                <Avatar
                  style={{ border: "2px solid var(--mantine-color-cyan-5)" }}
                  color="cyan.5"
                  bg="cyan.0"
                  size="4rem"
                  radius="xl"
                >
                  <IconChartHistogram size="1.7rem" />
                </Avatar>
                <Stack gap={0}>
                  <Text size="xl" fw={600}>
                    <NumberFormatter
                      prefix="AED "
                      thousandSeparator
                      value={profitLossData?.profit?.amount ?? 0}
                    />
                  </Text>
                  <Text size="md" c="gray.6">
                    Total Net Profit
                  </Text>
                </Stack>
              </Group>
              <Group w="45%">
                <Avatar
                  style={{ border: "2px solid var(--mantine-color-blue-5)" }}
                  color="blue.5"
                  bg="blue.0"
                  size="4rem"
                  radius="xl"
                >
                  <IconRosetteDiscount size="1.8rem" />
                </Avatar>
                <Stack gap={0}>
                  <Text size="xl" fw={600}>
                    <NumberFormatter
                      suffix="%"
                      thousandSeparator
                      value={profitLossData?.profit?.margin.toFixed(2) ?? 0}
                    />
                  </Text>
                  <Text size="md" c="gray.6">
                    Profit Margin
                  </Text>
                </Stack>
              </Group>
            </Group>
          </Stack>
        </Card>
      </Grid.Col>
      <Grid.Col span={6}>
        <Card p="2rem">
          <Stack>
            <Heading title="Job Type Wise Amounts" opacity={0.8} />
            <Group justify="space-between">
              {profitLossData?.job_sale_by_type?.length ? (
                profitLossData?.job_sale_by_type.map((item) => (
                  <Stack key={item.name} gap={3} align="center">
                    <Group justify="center" gap={8}>
                      <IconCircleFilled size="1rem" color={colorForProblemType(item.name)} />
                      <Text mt={3} size="md" c="gray.6">
                        {item.name}
                      </Text>
                    </Group>
                    <Text size="xl" fw={600}>
                      <NumberFormatter
                        prefix="AED "
                        thousandSeparator
                        value={item.total_sales ?? 0}
                      />
                    </Text>
                  </Stack>
                ))
              ) : (
                <Paper w={"100%"} py={20}>
                  <Center>
                    <Text fs="italic" opacity={0.6}>
                      No Job Types
                    </Text>
                  </Center>
                </Paper>
              )}
            </Group>
          </Stack>
        </Card>
      </Grid.Col>
      <Grid.Col span={12}>
        <Heading title="Loss Information" ml={6} mt={10} />
      </Grid.Col>
      <Grid.Col span={6}>
        <Card p="2rem">
          <Stack>
            <Heading title="Loss Detail & Margin" opacity={0.8} />
            <Group>
              <Group w="45%">
                <Avatar
                  style={{ border: "2px solid var(--mantine-color-red-5)" }}
                  color="red.5"
                  bg="red.0"
                  size="4rem"
                  radius="xl"
                >
                  <IconChartSankey size="1.7rem" />
                </Avatar>
                <Stack gap={0}>
                  <Text size="xl" fw={600}>
                    <NumberFormatter
                      prefix="AED "
                      thousandSeparator
                      value={profitLossData?.loss?.amount ?? 0}
                    />
                  </Text>
                  <Text size="md" c="gray.6">
                    Total Loss
                  </Text>
                </Stack>
              </Group>
              <Group w="45%">
                <Avatar
                  style={{ border: "2px solid var(--mantine-color-red-5)" }}
                  color="red.5"
                  bg="red.0"
                  size="4rem"
                  radius="xl"
                >
                  <IconRosetteDiscount size="1.8rem" />
                </Avatar>
                <Stack gap={0}>
                  <Text size="xl" fw={600}>
                    <NumberFormatter
                      suffix="%"
                      thousandSeparator
                      value={profitLossData?.loss?.margin ?? 0}
                    />
                  </Text>
                  <Text size="md" c="gray.6">
                    Loss Margin
                  </Text>
                </Stack>
              </Group>
            </Group>
          </Stack>
        </Card>
      </Grid.Col>
      <Grid.Col span={6}>
        <Card p="2rem">
          <Stack>
            <Heading title="Purchase and Direct Expense" opacity={0.8} />
            <Group justify="space-around">
              <Stack gap={3} align="center">
                <Group justify="center" gap={8}>
                  <IconCircleFilled size="1rem" color="var(--mantine-color-red-6)" />
                  <Text mt={3} size="md" c="gray.6">
                    Total Purchases
                  </Text>
                </Group>
                <Text size="xl" fw={600}>
                  <NumberFormatter
                    prefix="AED "
                    thousandSeparator
                    value={profitLossData?.total_expenses.purchases ?? 0}
                  />
                </Text>
              </Stack>
              <Stack gap={3} align="center">
                <Group justify="center" gap={8}>
                  <IconCircleFilled size="1rem" color="var(--mantine-color-violet-6)" />
                  <Text mt={3} size="md" c="gray.6">
                    Total Direct Expenses
                  </Text>
                </Group>
                <Text size="xl" fw={600}>
                  <NumberFormatter
                    prefix="AED "
                    thousandSeparator
                    value={profitLossData?.total_expenses.other ?? 0}
                  />
                </Text>
              </Stack>
            </Group>
          </Stack>
        </Card>
      </Grid.Col>
      <Grid.Col span={12}>
        <Heading title="Expenses By Type / In Direct Expense" ml={6} my={10} />
      </Grid.Col>
      <ScrollArea ml="5px" mb="1rem" w="100%">
        <Box w="100%">
          <Group preventGrowOverflow={false} wrap="nowrap">
            {profitLossData?.expenses_by_type.map((item) => (
              <Card key={item.name} w="300px" p={5}>
                <Box style={{ borderRadius: "0.4rem" }} w="100%" p={10} bg="blue.1">
                  <Text c="blue.6" ta="center">
                    {item.name}
                  </Text>
                </Box>
                <Title size="xl" c="blue.6" p="1rem" ta="center">
                  <NumberFormatter
                    prefix="AED "
                    thousandSeparator
                    value={item.total_expenses ?? 0}
                  />
                </Title>
              </Card>
            ))}
          </Group>
        </Box>
      </ScrollArea>
    </Grid>
  );
};

export default ProfitLossBody;
