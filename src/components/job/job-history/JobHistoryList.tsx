"use client";

import { JobListModel } from "@/lib/models/job.model";
import { JobColumns } from "../job-columns";
import Table from "@/components/common/Table";

const JobHistoryList = async ({ jobs }: { jobs: JobListModel }) => {
  return (
    <Table
      title="Your Completed Jobs "
      description="All job details done by you"
      columns={JobColumns}
      data={jobs}
    />
  );
};

export default JobHistoryList;
