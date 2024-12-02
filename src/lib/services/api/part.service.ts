import {
  CreatePartPayloadModal,
  UpdatePartPayloadModal,
  PartListSchema
} from "@/lib/models/part.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const PartListDataParser = parseFactory(PartListSchema, "PartListDataParser");

const getPartListApi = async () => {
  const result = await getAuthApiClient().get("part");
  return PartListDataParser(result.data);
};

const createPartApi = async (payload: CreatePartPayloadModal) => {
  const result = await getAuthApiClient().post("part", payload);
  return result;
};

const updatePartApi = async (partId: number, payload: UpdatePartPayloadModal) => {
  const result = await getAuthApiClient().patch(`part/${partId}`, payload);
  return result;
};

const deletePartApi = async (partId: number) => {
  const result = await getAuthApiClient().delete(`part/${partId}`);
  return result;
};

export { getPartListApi, updatePartApi, createPartApi, deletePartApi };
