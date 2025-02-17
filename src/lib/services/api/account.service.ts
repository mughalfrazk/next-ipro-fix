import { GetProfitLossPayloadModel, PorfitLossDataSchema } from "@/lib/models/account.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const ProfileLossDataParser = parseFactory(PorfitLossDataSchema, "ProfileLossDataParser");

const getProfitLossByDateApi = async (payload: GetProfitLossPayloadModel) => {
  const result = await getAuthApiClient().post("account/profit-loss", payload);
  return ProfileLossDataParser(result.data);
};

export { getProfitLossByDateApi };
