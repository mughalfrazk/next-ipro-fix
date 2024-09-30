import Table from "@/components/common/Table";

const JobsPage = () => {
  return (
    <Table
      title="Total Job"
      description="All job details and job status"
      search={true}
      button={true}
    />
  );
};

export default JobsPage;
