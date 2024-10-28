import { getTechniciansApi } from "@/lib/services/api/user.service";
import UserList from "@/components/user/userlist";

const UsersPage = async () => {
  const result = await getTechniciansApi();
  console.log(result);
  return <UserList users={result} />;
};

export default UsersPage;