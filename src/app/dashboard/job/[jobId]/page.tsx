import { getJobDetailApi } from "@/lib/services/api/job.service";
import AddNewJobClient from "@/components/job/add-new-job";

const AddNewJobPage = async ({ params }: { params: { jobId: string } }) => {
  const result = await getJobDetailApi(params.jobId);

  return <AddNewJobClient job={result} />;
};

export default AddNewJobPage;
