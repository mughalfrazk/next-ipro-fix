import { ProfileModel, UserListModel } from "@/lib/models/user.model";
import Table from "../common/Table";
import IproButton from "../core/IproButton";
import Link from "next/link";
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
        filter={<>Hello World</>}
      />
    );
  };
  
  export default UserList;