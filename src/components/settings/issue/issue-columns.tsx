import { IssueModel } from "@/lib/models/issue.model";
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
