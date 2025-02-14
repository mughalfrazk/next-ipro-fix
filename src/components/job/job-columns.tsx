"use client";

import { Avatar, Badge, Group, NumberFormatter, Stack, Text, Title } from "@mantine/core";
import { JobModel } from "@/lib/models/job.model";
import { redirect } from "next/navigation";
import Link from "next/link";
import { colorForJobStatus, showDateNicely } from "@/utils/functions";

export const createNewJobHandler = () => {
  redirect("/dashboard/job/add-new");
};

export const JobColumns = [
  {
    accessor: "Job ID",
    render: (row: JobModel) => {
      return (
        <Link href={`/dashboard/job/${row.id}`}>
          <Text fw={"bold"} c={"primary.6"}>
            {row.id.slice(-5)}
          </Text>
        </Link>
      );
    }
  },
  {
    accessor: "customer",
    title: "Customer",
    render: (row: JobModel) => {
      return (
        <Group>
          {row.customer ? (
            <>
              <Avatar
                key={row.customer.name}
                name={row.customer.name}
                alt="unknown"
                color="initials"
              />
              <Stack gap={2}>
                <Title order={6}>{row.customer.name}</Title>
                <Text size={"0.7rem"}>{row.customer.phone}</Text>
              </Stack>
            </>
          ) : (
            <Text>No customer information available</Text>
          )}
        </Group>
      );
    }
  },
  {
    accessor: "status",
    render: (row: JobModel) => {
      return (
        <Badge
          color={colorForJobStatus(row.job_status.name)}
          radius="md"
          size="sm"
          px={10}
          pt={10}
          pb={9}
        >
          <Text size="10" fw="bold" c="white">
            {row.job_status.name}
          </Text>
        </Badge>
      );
    }
  },
  {
    accessor: "quantity",
    render: (row: JobModel) => {
      return row.issues.reduce((prev, curr) => prev + curr.quantity, 0);
    }
  },
  {
    title: "Company Name",
    accessor: "customer.company_name"
  },
  {
    accessor: "technician",
    render: (row: JobModel) => {
      return !!row?.staff ? (
        <Group>
          <Avatar
            key={row.staff.id}
            name={`${row.staff.first_name} ${row.staff.last_name}`}
            color="initials"
          />
          <Stack gap={2}>
            <Title order={6}>{`${row.staff.first_name} ${row.staff.last_name}`}</Title>
            <Text size={"0.7rem"}>{`${row.staff.role.name.toUpperCase()}`}</Text>
          </Stack>
        </Group>
      ) : (
        <Text opacity={0.4}>
          <i>No Staff Assigned</i>
        </Text>
      );
    }
  },
  {
    accessor: "total",
    render: (row: JobModel) => {
      return (
        <NumberFormatter
          prefix="AED "
          value={row.issues.reduce((prev, curr) => prev + curr.total, 0)}
          thousandSeparator
        />
      );
    }
  },
  {
    title: "Created at",
    accessor: "created_at",
    textAlign: "right",
    render: (row: JobModel) => {
      return showDateNicely(row.created_at);
    }
  }
];
