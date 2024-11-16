import { ProblemListSchema } from "@/lib/models/problem.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const ProblemListDataParser = parseFactory(ProblemListSchema, "ProblemListDataParser");

const getProblemListApi = async () => {
  const result = await getAuthApiClient().get("problem");
  return ProblemListDataParser(result.data);
};

export { getProblemListApi };
