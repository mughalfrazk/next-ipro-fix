import JobHistoryList from "@/components/job/job-history/JobHistoryList";
import { getJobListApi } from "@/lib/services/api/job.service";

const JobsHistoryPage = async () => {
  const result = await getJobListApi();

  return <JobHistoryList jobs={result} />;
};

export default JobsHistoryPage;
