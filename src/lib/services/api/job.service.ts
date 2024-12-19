import {
  CreateJobPayloadModel,
  JobListSchema,
  JobSchema,
  UpdateJobPayloadModel
} from "@/lib/models/job.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const JobListDataParser = parseFactory(JobListSchema, "JobListDataParser");
const JobDataParser = parseFactory(JobSchema, "JobDataParser");

const createJobApi = async (payload: CreateJobPayloadModel) => {
  const result = await getAuthApiClient().post("job", payload);
  return result;
};

const updateJobApi = async (job_id: string, payload: UpdateJobPayloadModel) => {
  const result = await getAuthApiClient().patch(`job/${job_id}`, payload);
  return result;
};

const getJobListApi = async () => {
  const result = await getAuthApiClient().get("job");
  return JobListDataParser(result.data);
};

const getJobDetailApi = async (job_id: string) => {
  const result = await getAuthApiClient().get(`job/${job_id}`);
  return JobDataParser(result.data);
};

export { createJobApi, updateJobApi, getJobListApi, getJobDetailApi };
