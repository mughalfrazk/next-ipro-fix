"use client";

import { Avatar, Badge, Group, NumberFormatter, Stack, Text, Title } from "@mantine/core";
import { JobModel } from "@/lib/models/job.model";
import { redirect } from "next/navigation";
import Link from "next/link";
import { showDateNicely } from "@/utils/functions";

const colorForJobStatus = (name: string) => {
  return name === "Device Received"
    ? "orange.6"
    : name === "Pending Work"
      ? "red.6"
      : name === "Pending Approval"
        ? "indigo"
        : name === "Job Done"
          ? "primary.6"
          : name === "Delivered"
            ? "green"
            : "black";
};

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
      return !!row?.technician ? (
        <Group>
          <Avatar
            key={row.technician.id}
            name={`${row.technician.first_name} ${row.technician.last_name}`}
            color="initials"
          />
          <Stack gap={2}>
            <Title order={6}>{`${row.technician.first_name} ${row.technician.last_name}`}</Title>
            <Text
              size={"0.7rem"}
            >{`${row.technician.role.name.toUpperCase()}`}</Text>
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
      return <NumberFormatter prefix="AED " value={row.issues.reduce((prev, curr) => prev + curr.total, 0)} thousandSeparator />
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
