"use client"

import { Avatar, ProgressLabel, ProgressRoot, ProgressSection, Badge, Button, Group, Stack, Text, Title } from "@mantine/core";
import { ProfileModel, UserModel} from "@/lib/models/user.model";
import { redirect } from "next/navigation";
import { colorForUserRole } from "@/utils/functions";
import { title } from "process";

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

    {
      accessor: "role",
      render: (row: ProfileModel) => {
        return (
          <Badge variant="outline" color={colorForUserRole(row.role.name)} radius="sm" p={12}>
            {row.role.name}
          </Badge>
        );
     },
    },

    {
      accessor: "target",
      render: (row:UserModel) => {
        return (
          
          <ProgressRoot size="xl" w={150}>
                      <ProgressSection value={row.target ?? 0} color="primary.6">
                        <ProgressLabel>{((row.progress ?? 0) / (row.target ?? 0) * 100)}%</ProgressLabel>
                      </ProgressSection>
                    </ProgressRoot>
        );
        // return <Progress color="var(--mantine-color-primary-6)" radius="xl" value={row.target ?? 0} striped animated />;
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
      render: (row:UserModel) => {
        return <Button variant="transparent" size="compact-sm" color="var(--mantine-color-primary-6)">{"Open User"}</Button>;
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