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
  Title,
} from "@mantine/core";
import { ProfileModel, UserModel } from "@/lib/models/user.model";
import { redirect } from "next/navigation";
import { colorForUserRole } from "@/utils/functions";

export const createNewJobHandler = () => {
  redirect("/dashboard/user/add-new");
};

export const UserColumns = [
  {
    accessor: "id",
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
    },
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
          {row.role.name}
        </Badge>
      );
    },
  },

  {
    accessor: "target",
    render: (row: UserModel) => {
      const progressPercentage = (
        ((row.progress ?? 0) / (row.target ?? 1)) *
        100
      ).toFixed(2);
      return (
        <ProgressRoot size="xl" w={150}>
          <ProgressSection value={+progressPercentage} color="primary.6">
            <ProgressLabel>{progressPercentage}%</ProgressLabel>
          </ProgressSection>
        </ProgressRoot>
      );
    },
  },

  {
    accessor: "progress",
    title: "Earned Amount",
  },

  {
    accessor: "phone",
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
          {"Open User"}
        </Button>
      );
    },
  },
];
