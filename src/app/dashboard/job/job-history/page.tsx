import { getJobHistoryListApi } from "@/lib/services/api/job.service";
import JobHistoryList from "@/components/job/job-history/JobHistoryList";

const JobsHistoryPage = async () => {
  const result = await getJobHistoryListApi();

  return <JobHistoryList jobs={result.reverse()} />;
};

export default JobsHistoryPage;
