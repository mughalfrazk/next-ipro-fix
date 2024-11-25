"use client";

import { useDisclosure } from "@mantine/hooks";
import IproButton from "@/components/core/IproButton";
import Table from "@/components/common/Table";
import IssueDrawer from "./IssueDrawer";
import { IssueColumn } from "./issue-columns";
import { ProblemListModel } from "@/lib/models/problem.model";

const IssueList = ({ issues }: { issues: ProblemListModel }) => {
  const [opened, { open, close }] = useDisclosure();
  return (
    <>
      <IssueDrawer opened={opened} close={close} />
      <Table
        title="Issues List"
        description="All the issues added to the jobs"
        columns={IssueColumn}
        data={issues}
        rightSection={
          <IproButton fullWidth onClick={open}>
            Create New Issue
          </IproButton>
        }
      />
    </>
  );
};

export default IssueList;
