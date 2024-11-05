import AddNewUser from "@/components/user/create-new-user";
import { getUserDetailApi } from "@/lib/services/api/user.service";

const UserDetail = async ({ params }: { params: { userId: string } }) => {
  const result = await getUserDetailApi(params.userId);

  return <AddNewUser user={result} />;
};

export default UserDetail;
