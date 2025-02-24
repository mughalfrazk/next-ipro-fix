import { RoleListSchema } from "@/lib/models/role.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const RoleListDataParser = parseFactory(RoleListSchema, "RoleListDataParser");

const updateNotificationReadApi = async (id: number) => {
  const result = await getAuthApiClient().patch(`user-notification/${id}/read`);
  return result.data;
};

export { updateNotificationReadApi };
