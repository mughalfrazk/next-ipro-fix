import { ModelListSchema } from "@/lib/models/model.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const ModelListDataParser = parseFactory(ModelListSchema, "ModelListDataParser");

const getModelListApi = async () => {
  const result = await getAuthApiClient().get("model");
  return ModelListDataParser(result.data);
};

export { getModelListApi };
