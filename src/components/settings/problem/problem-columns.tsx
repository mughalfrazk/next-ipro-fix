import { IssueModel } from "@/lib/models/issue.model";
import { ProblemModel } from "@/lib/models/problem.model";
import { showDateNicely } from "@/utils/functions";
import { Group } from "@mantine/core";
import EditProblemDrawer from "./EditProblemDrawer";
import DeleteProblemPopover from "./DeleteProblemPopover";

export const IssueColumn = [
  {
    accessor: "name"
  },
  {
    accessor: "description"
  },
  {
    accessor: "created at",
    render: (row: IssueModel) => {
      return showDateNicely(row.created_at);
    }
  },
  {
    accessor: "action",
    textAlign: "right",
    render: (row: ProblemModel) => {
      return (
        <Group gap={0} justify="flex-end">
          <EditProblemDrawer selectedProblem={row} />
          <DeleteProblemPopover selectedId={row.id} />
        </Group>
      );
    }
  }
];
