"use client";

import {
  Avatar,
  ProgressLabel,
  ProgressRoot,
  ProgressSection,
  Badge,
  Button,
  Group,
  Stack,
  Text,
  Title
} from "@mantine/core";
import { redirect } from "next/navigation";

import { ProfileModel, UserModel } from "@/lib/models/user.model";
import { colorForUserRole } from "@/utils/functions";
import Link from "next/link";

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
          <Avatar src="../../assets/Avatar_man.png" alt="user_image" />
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
    render: (row: ProfileModel) => {
      return (
        <Badge
          variant="outline"
          color={colorForUserRole(row.role.name)}
          radius="sm"
          p={12}
        >
          {row.role.name === "technician" && row?.speciality
            ? `${row.role.name}-${row?.speciality.name.split("-")[0]}`
            : row.role.name}
        </Badge>
      );
    }
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
      let progressPercentage = (
        ((row.progress ?? 0) / (row.target ?? 1)) *
        100
      ).toFixed(2);

      progressPercentage = String(isNaN(+progressPercentage) ? 0 : progressPercentage)  
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
    accessor: "progress",
    title: "Earned Amount",
    render: (row: UserModel) => {
      return `AED ${row.progress ?? 0}`;
    }
  },
  {
    accessor: "actions",
    render: () => {
      return (
        <Button
          variant="transparent"
          size="compact-sm"
          color="var(--mantine-color-primary-6)"
        >
          Open User
        </Button>
      );
    }
  }
];
