import { getUserListApi } from "@/lib/services/api/user.service";
import UserList from "@/components/user/UserTable";

const UsersPage = async () => {
  const result = await getUserListApi();

  return <UserList users={result} />;
};

export default UsersPage;
