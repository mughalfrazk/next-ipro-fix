"use client";

import { useState } from "react";
import Link from "next/link";

import { JobColumns } from "./job-columns";
import { JobListModel } from "@/lib/models/job.model";
import Table from "@/components/common/Table";
import JobFilterBody from "./JobFilterBody";
import IproButton from "@/components/core/IproButton";

const JobList = ({ jobs }: { jobs: JobListModel }) => {
  const [filteredJobs, setFilteredJobs] = useState<JobListModel>(jobs);

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
      initialData={jobs}
      data={filteredJobs}
      setFilteredData={setFilteredJobs}
      drawerTitle="Jobs Filter"
      filter={(close, appliedFilters, setAppliedFilters) => (
        <JobFilterBody
          jobs={jobs}
          close={close}
          appliedFilters={appliedFilters}
          setFilteredJobs={setFilteredJobs}
          setAppliedFilters={setAppliedFilters}
        />
      )}
    />
  );
};

export default JobList;
