"use client";

import {
  Avatar,
  ProgressLabel,
  ProgressRoot,
  ProgressSection,
  Button,
  Group,
  Stack,
  Text,
  Title,
  NumberFormatter
} from "@mantine/core";
import { redirect } from "next/navigation";

import { ProfileModel, UserModel } from "@/lib/models/user.model";
import Link from "next/link";
import RoleBadge from "../common/RoleBadge";

export const createNewJobHandler = () => {
  redirect("/dashboard/user/add-new");
};

export const UserColumns = [
  {
    accessor: "User ID",
    render: (row: UserModel) => {
      return (
        <Link href={`/dashboard/user/${row.id}`}>
          <Text fw={"bold"} c={"primary.6"}>
            {row.id.slice(-5)}
          </Text>
        </Link>
      );
    }
  },
  {
    accessor: "user",
    render: (row: UserModel) => {
      return (
        <Group>
          <Avatar color="initials" alt="user_image" name={`${row.first_name} ${row.last_name}`} />
          <Stack gap={2}>
            <Title order={6}>{`${row.first_name} ${row.last_name}`}</Title>
            <Text size="sm">{`${row.email}`}</Text>
          </Stack>
        </Group>
      );
    }
  },
  {
    accessor: "role",
    render: (row: ProfileModel) => <RoleBadge user={row} />
  },
  {
    accessor: "phone"
  },
  {
    accessor: "jobs",
    title: "No of jobs"
  },
  {
    accessor: "target",
    render: (row: UserModel) => {
      return <NumberFormatter prefix="AED " value={row?.target ?? 0} thousandSeparator />;
    }
  },
  {
    accessor: "progress",
    title: "Progress",
    render: (row: UserModel) => {
      let progressPercentage = (((row.progress ?? 0) / (row.target ?? 1)) * 100).toFixed(2);

      progressPercentage = String(isNaN(+progressPercentage) ? 0 : progressPercentage);
      return (
        <ProgressRoot size="xl" w={150}>
          <ProgressSection value={+progressPercentage} color="primary.6">
            <ProgressLabel>{progressPercentage}%</ProgressLabel>
          </ProgressSection>
        </ProgressRoot>
      );
    }
  },
  {
    accessor: "Earned Amount",
    title: "Progress Amount",
    render: (row: UserModel) => {
      return <NumberFormatter prefix="AED " value={row?.progress ?? 0} thousandSeparator />;
    }
  },
  {
    accessor: "actions",
    textAlign: "right",
    render: (row: UserModel) => {
      return (
        <Link href={`/dashboard/user/${row.id}`}>
          <Button variant="subtle" color="var(--mantine-color-primary-6)">
            Open User
          </Button>
        </Link>
      );
    }
  }
];
