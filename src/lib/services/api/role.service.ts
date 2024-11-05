import { RoleListSchema } from "@/lib/models/role.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const RoleListDataParser = parseFactory(RoleListSchema, "RoleListDataParser");

const getRoleListApi = async () => {
  const result = await getAuthApiClient().get("role");
  return RoleListDataParser(result.data);
};

export { getRoleListApi };
