import {
  CreateJobPayloadModel,
  JobListSchema,
  JobSchema,
  UpdateJobOptionalPayloadModal,
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

const updateJobOptionalApi = async (job_id: string, payload: UpdateJobOptionalPayloadModal) => {
  const result = await getAuthApiClient().patch(`job/${job_id}/optional`, payload);
  return result;
};

const assignStaffToJobApi = async (job_id: string, staff_id: string) => {
  const result = await getAuthApiClient().patch(`job/${job_id}/assign-staff/${staff_id}`);
  return result;
};

const getJobHistoryListApi = async () => {
  const result = await getAuthApiClient().get("job/history");
  return JobListDataParser(result.data);
};

const getJobListApi = async () => {
  const result = await getAuthApiClient().get("job");
  return JobListDataParser(result.data);
};

const getJobDetailApi = async (job_id: string) => {
  const result = await getAuthApiClient().get(`job/${job_id}`);
  return JobDataParser(result.data);
};

const removeIssueFromJobApi = async (job_id: string, issue_id: string) => {
  const result = await getAuthApiClient().patch(`job/${job_id}/remove-issue/${issue_id}`);
  return result.data;
};

const deliverJobApi = async (job_id: string) => {
  const result = await getAuthApiClient().get(`job/${job_id}/delivered`);
  return result;
};

const rejectJobApi = async (job_id: string) => {
  const result = await getAuthApiClient().patch(`job/${job_id}/reject`);
  return result;
};

export {
  createJobApi,
  updateJobApi,
  updateJobOptionalApi,
  assignStaffToJobApi,
  getJobListApi,
  getJobDetailApi,
  getJobHistoryListApi,
  removeIssueFromJobApi,
  deliverJobApi,
  rejectJobApi
};
