import { getJobDetailApi } from "@/lib/services/api/job.service";
import JobDetailPage from "@/components/job/JobDetailPage";

const AddNewJobPage = async ({ params }: { params: { jobId: string } }) => {
  const result = await getJobDetailApi(params.jobId);

  return <JobDetailPage job={result} />;
};

export default AddNewJobPage;
