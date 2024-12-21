"use client";

import {
  Avatar,
  BackgroundImage,
  Card,
  Divider,
  Grid,
  GridCol,
  Group,
  Image,
  Stack,
  Text,
  Title,
  Center,
  rem,
  NumberFormatter
} from "@mantine/core";

import Table from "@/components/common/Table";
import Heading from "@/components/common/Heading";
import IproButton from "@/components/core/IproButton";
import { JobModel } from "@/lib/models/job.model";
import { IssueModel } from "@/lib/models/issue.model";
import { PurchaseModel } from "@/lib/models/purchase.model";
import { IconUserX } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const InvoiceTab = ({ job }: { job: JobModel }) => {
  const [issuesTotal, setIssuesTotal] = useState(0);
  const [purchasesTotal, setPurchasesTotal] = useState(0);

  console.log(job)

  useEffect(() => {
    if (job) {
      setIssuesTotal(job.issues.reduce((prev, curr) => prev + curr.total, 0));
      setPurchasesTotal(job?.purchases?.reduce((prev, curr) => prev + curr.total, 0) ?? 0);
    }
  }, [job]);

  return (
    <Grid>
      <GridCol span={8}>
        <Card pb={20}>
          <BackgroundImage
            src="https://images.unsplash.com/photo-1690046793177-44d9e1b3de38?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            px={30}
            py={20}
            radius="lg"
          >
            <Group justify="space-between">
              <Stack gap={0}>
                <Text c="white" size="sm" fw="bold">
                  Invoice Number
                </Text>
                <Text c="white" size="xl" fw="bold">
                  XXXXXX-XXX-XXX-XXXXXXX
                </Text>
                <Group mt={20} gap={6}>
                  <Text c="white" size="xs">
                    Issued Date:
                  </Text>
                  <Text c="white" fw="600">
                    April 4-2023
                  </Text>
                </Group>
                <Group gap={6}>
                  <Text c="white" size="xs">
                    Issued Time:
                  </Text>
                  <Text c="white" fw="600">
                    12:33 PM
                  </Text>
                </Group>
              </Stack>
              <Stack gap={0} align="flex-end">
                <Text c="white" fw="bold" size="sm" ta="right">
                  Customer
                </Text>
                <Text c="white" size="xl" fw="bold" ta="right">
                  {job.customer.name}
                </Text>
                <Group mt={20} gap={6}>
                  <Text c="white" size="xs" ta="right">
                    Ph no:
                  </Text>
                  <Text c="white" ta="right" fw="600">
                    {job.customer.phone}
                  </Text>
                </Group>
                <Group gap={6}>
                  <Text c="white" size="xs" ta="right">
                    Company Name:
                  </Text>
                  <Text c="white" ta="right" fw="600">
                    {job.customer.company_name}
                  </Text>
                </Group>
              </Stack>
            </Group>
          </BackgroundImage>

          <Heading title="Issues" mt={30} />
          <Table
            p={0}
            columns={[
              {
                accessor: "brand_id",
                title: "Brand Name",
                render: (row: IssueModel) => {
                  return row?.brand?.name;
                }
              },
              {
                accessor: "model_id",
                title: "Model",
                render: (row: IssueModel) => {
                  return row?.model?.name;
                }
              },
              {
                accessor: "problem_type_id",
                title: "Problem Type",
                render: (row: IssueModel) => {
                  return row?.problem?.name;
                }
              },
              {
                accessor: "quantity"
              },
              {
                accessor: "charges"
              },
              {
                accessor: "total",
                textAlign: "right"
              }
            ]}
            data={job.issues}
            pagination={false}
          />

          <Heading title="Extra Job Task Detail" mt={30} />
          <Table
            p={0}
            columns={[
              {
                accessor: "part_id",
                title: "Part Name",
                render: (row: PurchaseModel) => {
                  return row?.part?.name;
                }
              },
              {
                accessor: "model_id",
                title: "Model Name",
                render: (row: PurchaseModel) => {
                  return row?.model?.name;
                }
              },
              {
                accessor: "quantity"
              },
              {
                accessor: "total",
                textAlign: "right"
              }
            ]}
            data={job.purchases ?? []}
            pagination={false}
          />

          <Heading title="Total Payables" mt={30} mb={10} />
          <Divider mb={15} />
          <Group justify="space-between" mb={10}>
            <Text size="sm">Job Total</Text>
            <Text>
              <NumberFormatter prefix="AED " value={issuesTotal} thousandSeparator />
            </Text>
          </Group>
          <Group justify="space-between">
            <Text size="sm">Extra Total Job</Text>
            <Text>
              <NumberFormatter prefix="AED " value={purchasesTotal} thousandSeparator />
            </Text>
          </Group>
          <Divider mt={15} mb={20} />
          <Group justify="space-between">
            <Title order={3}>Total Amount</Title>
            <Title order={3}>
              <NumberFormatter
                prefix="AED "
                value={issuesTotal + purchasesTotal}
                thousandSeparator
              />
            </Title>
          </Group>
        </Card>
      </GridCol>
      <GridCol span={4}>
        <Card>
          <Heading title="Actions" mb={20} />
          <IproButton mb={10}>Print Invoice</IproButton>
          <IproButton variant="outline">Edit Invoice</IproButton>
        </Card>
        <Card mt={15}>
          <Heading title="Job Technician" mb={20} />
          {job.technician?.role?.name === "technician" ? (
            <Stack gap={0}>
              <Group ps={10} mb={20}>
                <Avatar name="Albert Flores" size="lg" color="initials" />
                <Stack gap={0}>
                  <Title order={4} c="primary">
                    {`${job.technician?.first_name} ${job.technician?.last_name}`}
                  </Title>
                  <Text size="xs">{job.technician?.email}</Text>
                </Stack>
              </Group>
              <Group justify="space-between" mb={6}>
                <Text size="sm">Phone no:</Text>
                <Text fw="600">{job.technician?.phone}</Text>
              </Group>
              <Group justify="space-between" mb={10}>
                <Text size="sm">Address no:</Text>
                <Text fw="600">{job.technician?.address}</Text>
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
        <Card mt={15}>
          <Heading title="Job Barcode" mb={20} />
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__zUYSKisjapIoQLxoKwojgUSoZsRDSODAQ&s"
            height={30}
            mb={20}
          />
          <IproButton>Print Barcode</IproButton>
        </Card>
      </GridCol>
    </Grid>
  );
};

export default InvoiceTab;
