import { getAuthApiClient } from "@/utils/api-client";

const updateNotificationReadApi = async (id: number) => {
  const result = await getAuthApiClient().patch(`user-notification/${id}/read`);
  return result.data;
};

export { updateNotificationReadApi };
