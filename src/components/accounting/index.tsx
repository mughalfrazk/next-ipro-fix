"use client";

import { ScrollArea ,Title, Text, Avatar, Grid, Group, Card, Stack, Box } from "@mantine/core";
import Heading from "../common/Heading";
import IproButton from "../core/IproButton";
import { DateInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import {
  IconChartSankey,
  IconChartHistogram,
  IconRosetteDiscount,
  IconCircleFilled
} from "@tabler/icons-react";

const ProfitLossBody = () => {
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
              />
            </Grid.Col>
            <Grid.Col span={5}>
              <DateInput
                label="End Date"
                placeholder="Enter End Date"
                valueFormat="YYYY MMM DD"
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <Stack justify="flex-end" h={60}>
                <IproButton>Apply Filter</IproButton>
              </Stack>
            </Grid.Col>
          </Grid>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card bg="var(--mantine-color-grape-1)">
          <Stack gap="xs">
            <Text c="grape.8" size="md">
              Total Sales-Jobs
            </Text>
            <Text fw={500} c="grape.8" size="xl">
              AED 50500
            </Text>
          </Stack>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card bg="var(--mantine-color-cyan-1)">
          <Stack gap="xs">
            <Text c="cyan.8" size="md">
              Total Purchses
            </Text>
            <Text fw={500} c="cyan.8" size="xl">
              AED 55202.25
            </Text>
          </Stack>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card bg="var(--mantine-color-blue-1)">
          <Stack gap="xs">
            <Text c="blue.8" size="md">
              Total Job Loses
            </Text>
            <Text fw={500} c="blue.8" size="xl">
              AED 9529.25
            </Text>
          </Stack>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card bg="var(--mantine-color-indigo-1)">
          <Stack gap="xs">
            <Text c="indigo.8" size="md">
              Total Gross Profit
            </Text>
            <Text fw={500} c="indigo.8" size="xl">
              AED 9529.25
            </Text>
          </Stack>
        </Card>
      </Grid.Col>
      <Grid.Col span={12}>
        <Heading title="Profit Information" ml={6} my={10} />
      </Grid.Col>
      <Grid.Col span={6}>
        <Card p="2rem">
          <Stack>
            <Text size="lg" mb="1rem">
              {" "}
              Profit Total & Margin
            </Text>
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
                  <Text size="xl">AED 556.523</Text>
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
                  <Text size="xl">45%</Text>
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
            <Text size="lg" mb="1rem">
              {" "}
              Job Type Wise Amounts{" "}
            </Text>
            <Group justify="space-between">
              <Stack gap={0} align="center">
                <Group justify="center" gap={8}>
                  <IconCircleFilled
                    size="1rem"
                    color="var(--mantine-color-red-6)"
                  />
                  <Text mt={3} size="md" c="gray.6">
                    SW-Software
                  </Text>
                </Group>
                <Text size="xl">
                    AED 54,071 
                  </Text>
              </Stack>
              <Stack gap={0} align="center">
                <Group justify="center" gap={8}>
                  <IconCircleFilled
                    size="1rem"
                    color="var(--mantine-color-violet-6)"
                  />
                  <Text mt={3} size="md" c="gray.6">
                    HW-Hardware
                  </Text>
                </Group>
                <Text size="xl">
                    AED 54,071 
                  </Text>
              </Stack>
              <Stack gap={0} align="center">
                <Group justify="center" gap={8}>
                  <IconCircleFilled
                    size="1rem"
                    color="var(--mantine-color-blue-6)"
                  />
                  <Text mt={3} size="md" c="gray.6">
                    GW-Android
                  </Text>
                </Group>
                <Text size="xl">
                    AED 54,071 
                  </Text>
              </Stack>
              <Stack gap={0} align="center">
                <Group justify="center" gap={8}>
                  <IconCircleFilled
                    size="1rem"
                    color="var(--mantine-color-green-6)"
                  />
                  <Text mt={3} size="md" c="gray.6">
                    GW-Apple
                  </Text>
                </Group>
                <Text size="xl">
                    AED 54,071 
                  </Text>
              </Stack>
            </Group>
          </Stack>
        </Card>
      </Grid.Col>
      <Grid.Col span={12}>
        <Heading title="Loss Information" ml={6} my={10} />
      </Grid.Col>
      <Grid.Col span={6}>
        <Card p="2rem">
          <Stack>
            <Text size="lg" mb="1rem">
              {" "}
              Loss Detail & Margin
            </Text>
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
                  <Text size="xl">AED 556.523</Text>
                  <Text size="md" c="gray.6">
                        Total Net Expenses
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
                  <Text size="xl">45%</Text>
                  <Text size="md" c="gray.6">
                        Expense Margin
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
            <Text size="lg" mb="1rem">
              {" "}
              Purchase and Direct Expense{" "}
            </Text>
            <Group>
              <Stack w="45%" gap={0} align="center">
                <Group justify="center" gap={8}>
                  <IconCircleFilled
                    size="1rem"
                    color="var(--mantine-color-red-6)"
                  />
                  <Text mt={3} size="md" c="gray.6">
                  Total Purchases
                  </Text>
                </Group>
                <Text size="xl">
                AED 55634.523
                  </Text>
              </Stack>
              <Stack w="45%" gap={0} align="center">
                <Group justify="center" gap={8}>
                  <IconCircleFilled
                    size="1rem"
                    color="var(--mantine-color-violet-6)"
                  />
                  <Text mt={3} size="md" c="gray.6">
                  Total Direct Expenses
                  </Text>
                </Group>
                <Text size="xl">
                AED 55634.523 
                  </Text>
              </Stack>
            </Group>
          </Stack>
        </Card>
      </Grid.Col>
      <Grid.Col span={12}>
        <Heading title="Expenses By Type/ InDirect Expense" ml={6} my={10} />
      </Grid.Col>
      <ScrollArea ml="5px" mb="1rem" w="100%">
      <Box w="100%">
        {<Group preventGrowOverflow={false} wrap="nowrap">
            <Card w="300px" p={5}>
                <Box 
                style={{ borderRadius:'0.4rem'}}
                w="100%" p={10} bg="blue.1">
                    <Text c="blue.6" ta="center">
                    Stationery  
                    </Text>
                </Box>
                <Title size="xl" c="blue.6" p="1rem" ta="center">
                AED 2,687,59.45
                </Title>
            </Card>
            <Card w="300px" p={5}>
                <Box 
                style={{ borderRadius:'0.4rem'}}
                w="100%" p={10} bg="blue.1">
                    <Text c="blue.6" ta="center">
                    Stationery  
                    </Text>
                </Box>
                <Title size="xl" c="blue.6" p="1rem" ta="center">
                AED 2,687,59.45
                </Title>
            </Card>
            <Card w="300px" p={5}>
                <Box 
                style={{ borderRadius:'0.4rem'}}
                w="100%" p={10} bg="blue.1">
                    <Text c="blue.6" ta="center">
                    Stationery  
                    </Text>
                </Box>
                <Title size="xl" c="blue.6" p="1rem" ta="center">
                AED 2,687,59.45
                </Title>
            </Card>
            <Card w="300px" p={5}>
                <Box 
                style={{ borderRadius:'0.4rem'}}
                w="100%" p={10} bg="blue.1">
                    <Text c="blue.6" ta="center">
                    Stationery  
                    </Text>
                </Box>
                <Title size="xl" c="blue.6" p="1rem" ta="center">
                AED 2,687,59.45
                </Title>
            </Card>
            <Card w="300px" p={5}>
                <Box 
                style={{ borderRadius:'0.4rem'}}
                w="100%" p={10} bg="blue.1">
                    <Text c="blue.6" ta="center">
                    Stationery  
                    </Text>
                </Box>
                <Title size="xl" c="blue.6" p="1rem" ta="center">
                AED 2,687,59.45
                </Title>
            </Card>
            <Card w="300px" p={5}>
                <Box 
                style={{ borderRadius:'0.4rem'}}
                w="100%" p={10} bg="blue.1">
                    <Text c="blue.6" ta="center">
                    Stationery  
                    </Text>
                </Box>
                <Title size="xl" c="blue.6" p="1rem" ta="center">
                AED 2,687,59.45
                </Title>
            </Card>  
        </Group>  
      }
      </Box>
    </ScrollArea>
    </Grid>
  );
};

export default ProfitLossBody;
