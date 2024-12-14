import { JobStatusListSchema } from "@/lib/models/job-status.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const JobStatusListDataParser = parseFactory(JobStatusListSchema, "JobStatusListDataParser")

const getJobStatusListApi = async () => {
  const result = await getAuthApiClient().get("job-status");
  return JobStatusListDataParser(result.data);
};

export { getJobStatusListApi }
