import { PartListSchema } from "@/lib/models/part.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const PartListDataParser = parseFactory(PartListSchema, "PartListDataParser")

const getPartListApi = async () => {
  const result = await getAuthApiClient().get("part");
  return PartListDataParser(result.data);
};

export { getPartListApi }
