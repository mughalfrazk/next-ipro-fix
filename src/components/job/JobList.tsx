"use client";

import { JobListModel } from "@/lib/models/job.model";
import { JobColumns } from "./job-columns";
import Table from "../common/Table";
import IproButton from "../core/IproButton";
import Link from "next/link";

const JobList = ({ jobs }: { jobs: JobListModel }) => {
  return (
    <Table
      title="Total Job"
      description="All job details and job status"
      search={true}
      rightSection={
        <Link href="/dashboard/job/add-new">
          <IproButton fullWidth>Create New Job</IproButton>
        </Link>
      }
      columns={JobColumns}
      data={jobs}
      filter={<>Hello World</>}
    />
  );
};

export default JobList;
