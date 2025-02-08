import {
  CreateModelPayloadModel,
  ModelListSchema,
  UpdateModelPayloadModel
} from "@/lib/models/model.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const ModelListDataParser = parseFactory(ModelListSchema, "ModelListDataParser");

const getModelListApi = async () => {
  const result = await getAuthApiClient().get("model");
  return ModelListDataParser(result.data);
};

const getModelListByBrandIdApi = async (brand_id: string) => {
  const result = await getAuthApiClient().get(`model?brand_id=${brand_id}`);
  return ModelListDataParser(result.data);
};

const createModelApi = async (payload: CreateModelPayloadModel) => {
  const result = await getAuthApiClient().post("model", payload);
  return result;
};

const updateModelApi = async (modelId: number, payload: UpdateModelPayloadModel) => {
  const result = await getAuthApiClient().patch(`model/${modelId}`, payload);
  return result;
};

const deleteModelApi = async (modelId: number) => {
  const result = await getAuthApiClient().delete(`model/${modelId}`);
  return result;
};

export {
  getModelListApi,
  getModelListByBrandIdApi,
  createModelApi,
  updateModelApi,
  deleteModelApi
};
