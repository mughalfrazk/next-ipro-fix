import { getJobListApi } from "@/lib/services/api/job.service"
import JobList from "@/components/job/JobList"

const JobsPage = async () => {
  const result = await getJobListApi()

  return <JobList jobs={result.reverse()} />
}

export default JobsPage
