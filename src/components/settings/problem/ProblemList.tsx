"use client";

import { useDisclosure } from "@mantine/hooks";
import IproButton from "@/components/core/IproButton";
import Table from "@/components/common/Table";
import { IssueColumn } from "./problem-columns";
import { ProblemListModel } from "@/lib/models/problem.model";
import ProblemDrawer from "./ProblemDrawer";

const IssueList = ({ issues }: { issues: ProblemListModel }) => {
  const [opened, { open, close }] = useDisclosure();
  return (
    <>
      <ProblemDrawer opened={opened} close={close} />
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
