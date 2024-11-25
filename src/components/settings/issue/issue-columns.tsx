import { IssueModel } from "@/lib/models/issue.model";
import { ProblemModel } from "@/lib/models/problem.model";
import { showDateNicely } from "@/utils/functions";

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
  }
];
