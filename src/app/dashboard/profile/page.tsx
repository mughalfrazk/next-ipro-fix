import CreateOrUpdateUser from "@/components/user/create-new-user";
import { getProfileApi } from "@/lib/services/api/user.service";

const UserDetail = async () => {
  const result = await getProfileApi();

  return <CreateOrUpdateUser user={result} />;
};

export default UserDetail;