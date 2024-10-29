import { getUserListApi } from "@/lib/services/api/user.service";
import UserList from "@/components/user/UserList";

const UsersPage = async () => {
  const result = await getUserListApi();
  console.log(result);
  return <UserList users={result} />;
};

export default UsersPage;

