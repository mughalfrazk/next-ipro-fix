import Link from "next/link";
import Table from "../common/Table";
import UserFilterBody from "./UserFilterBody";
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
      drawerTitle={"User Filter"}
      filter={<UserFilterBody />}
    />
  );
};

export default UserList;
