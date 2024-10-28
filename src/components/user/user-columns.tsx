"use client"

import { Avatar, Badge, Button, Group, Stack, Text, Title } from "@mantine/core";
import { ProfileModel, UserModel} from "@/lib/models/user.model";
import { redirect } from "next/navigation";
import { colorForUserRole } from "@/utils/functions";

export const createNewJobHandler = () => {
    redirect("/dashboard/user/add-new")
  }

  export const UserColumns = [
    {
      accessor: "id",
    },
    {
      accessor: "user",
      render: (row:UserModel) => {
        return (
          <Group>
            <Avatar
              src="../../assets/Avatar_man.png" alt="user_image" 
            />
            <Stack gap={2}>
            <Title
              order={6}
            >{`${row.first_name} ${row.last_name}`}</Title>
            <Text size="sm">{`${row.email}`}</Text>
            </Stack>
          </Group>
        );
      },
    },

    // {
    //   accessor: "role",
    //   render: (row: ProfileModel) => {
    //     return (
    //       <Badge variant="outline" color={colorForUserRole(row.role.name)} radius="sm" p={12}>
    //         {row.role.name}
    //       </Badge>
    //     );
    //  },
    // },
    
    {
      accessor: "phone",
    },
    
    {
      accessor: "jobId",
      render: (row:UserModel) => {
        return <Button variant="white" size="compact-sm" color="var(--mantine-color-primary-6)">{"Open User"}</Button>;
      },
    },

    // {
    //   accessor: "user",
    //   title: "User",
    //   render: (row: ProfileModel) => {
    //     return (
    //       <Group>
    //         <Avatar
    //           src="../../assets/Avatar_man.png" alt="user_image" 
    //         />
    //         <Stack gap={2}>
    //         <Title
    //           order={6}
    //         >{`${row.user.first_name} ${row.user.last_name}`}</Title>
    //           <Text size={"0.7rem"}>{row.user.email}</Text>
    //         </Stack>
    //       </Group>
    //     );
    //   },
    // },
    // {
    //   accessor: "role",
    //   render: (row: ProfileModel) => {
    //     return (
    //       <Badge variant="outline" color={colorForUserRole(row.role.name)} radius="sm" p={12}>
    //         {row.role.name}
    //       </Badge>
    //     );
    //   },
    // },
    // {
    //   accessor: "quantity",
    //   render: (row: ProfileModel) => {
    //     return row.issues.reduce((prev, curr) => prev + curr.quantity, 0);
    //   },
    // },
    // {
    //   title: "Company Name",
    //   accessor: "customer.company_name",
    // },
    // {
    //   accessor: "technician",
    //   render: (row: JobModel) => {
    //     return (
    //       <Group>
    //         <Avatar
    //           key={row.technician.id}
    //           name={`${row.technician.first_name} ${row.technician.last_name}`}
    //           color="initials"
    //         />
    //         <Stack gap={2}>
    //           <Title
    //             order={6}
    //           >{`${row.technician.first_name} ${row.technician.last_name}`}</Title>
    //           <Text
    //             size={"0.7rem"}
    //           >{`${row.technician.first_name} ${row.technician.last_name}`}</Text>
    //         </Stack>
    //       </Group>
    //     );
    //   },
    // },
    // {
    //   accessor: "total",
    //   render: (row: JobModel) => {
    //     return row.issues.reduce((prev, curr) => prev + curr.total, 0);
    //   },
    // },
  ];