"use client"

import Link from "next/link"

import { JobListModel } from "@/lib/models/job.model"
import IproButton from "@/components/core/IproButton"
import Table from "@/components/common/Table"
import { JobColumns } from "./job-columns"

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
  )
}

export default JobList
