import { CreateJobPayloadModel, JobListSchema } from '@/lib/models/job.model'
import { getAuthApiClient } from '@/utils/api-client'
import { parseFactory } from '@/utils/parse-factory'

const JobListDataParser = parseFactory(JobListSchema, 'JobListDataParser')

const createJobApi = async (payload: CreateJobPayloadModel) => {
  const result = await getAuthApiClient().post('job', payload)
  return result
}

const getJobListApi = async () => {
  const result = await getAuthApiClient().get('job')
  return JobListDataParser(result.data)
}

export { createJobApi, getJobListApi }
