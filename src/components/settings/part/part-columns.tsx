import { PartModel } from "@/lib/models/part.model";
import { showDateNicely } from "@/utils/functions";

export const PartColumns = [
  {
    accessor: "name"
  },
  {
    accessor: "description"
  },
  {
    accessor: "created_at",
    render: (row: PartModel) => {
      return showDateNicely(row.created_at);
    }
  }
];

export default PartColumns;
