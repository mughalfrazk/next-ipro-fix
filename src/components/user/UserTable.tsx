import Link from "next/link";
import { Stack, Text, MultiSelect, Title } from "@mantine/core";
import Table from "../common/Table";
import IproButton from "../core/IproButton";
import { UserListModel } from "@/lib/models/user.model";
import { UserColumns } from "./user-columns";

const UserList = ({ users }: { users: UserListModel }) => {
  return (
    <Table
      title="Total Users"
      description="All users details and roles"
      search={true}
      rightSection={
        <Link href="/dashboard/user/add-new">
          <IproButton fullWidth>Create New User</IproButton>
        </Link>
      }
      columns={UserColumns}
      data={users}
      drawerTitle={"User Roles"}
      filter={
        <Stack>
          <Text size="sm">You can filter the users by their roles</Text>
          <MultiSelect
            label="User Roles"
            placeholder="Select User Roles to Filter"
            data={[
              "Admin",
              "Accountant",
              "Receptionist",
              "Technicians",
              "Technicians HW",
              "Technicians SW",
              "Technicians GW",
              "Technicians AW",
              "Staff"
            ]}
            defaultValue={["All"]}
            clearable
          />
          <Stack align="start">
            <IproButton>Apply Filter</IproButton>
          </Stack>
        </Stack>
      }
    />
  );
};

export default UserList;
