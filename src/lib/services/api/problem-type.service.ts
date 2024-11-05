import { ProblemTypeListSchema } from "@/lib/models/problem-type.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const ProblemTypeListDataParser = parseFactory(
  ProblemTypeListSchema,
  "ProblemTypeListDataParser",
);

const getProblemTypeListApi = async () => {
  const result = await getAuthApiClient().get("problem-type");
  return ProblemTypeListDataParser(result.data);
};

export { getProblemTypeListApi };
