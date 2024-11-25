import {
  ProblemListSchema,
  UpdateProblemPayloadModal,
  CreateProblemPayloadModal
} from "@/lib/models/problem.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const ProblemListDataParser = parseFactory(ProblemListSchema, "ProblemListDataParser");

const getProblemListApi = async () => {
  const result = await getAuthApiClient().get("problem");
  return ProblemListDataParser(result.data);
};

const createProblemApi = async (payload: CreateProblemPayloadModal) => {
  const result = await getAuthApiClient().post("problem", payload);
  return result;
};

const updateProblemApi = async (problemId: number, payload: UpdateProblemPayloadModal) => {
  const result = await getAuthApiClient().patch(`problem/${problemId}`, payload);
  return result;
};

export { getProblemListApi, createProblemApi, updateProblemApi };
