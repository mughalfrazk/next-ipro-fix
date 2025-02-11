import CreateOrUpdateUser from "@/components/user/add-new-user";
import { getUserDetailApi } from "@/lib/services/api/user.service";

const UserDetail = async ({ params }: { params: { userId: string } }) => {
  const result = await getUserDetailApi(params.userId);

  return <CreateOrUpdateUser user={result} />;
};

export default UserDetail;
