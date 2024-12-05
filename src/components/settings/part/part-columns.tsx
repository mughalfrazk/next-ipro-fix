import { PartModel } from "@/lib/models/part.model";
import { showDateNicely } from "@/utils/functions";
import { Group } from "@mantine/core";
import EditPartDrawer from "./EditPartDrawer";
import DeletePartPopover from "./DeletePartPopover";

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
  },
  {
    accessor: "action",
    textAlign: "right",
    render: (row: PartModel) => {
      return (
        <Group gap={0} justify="flex-end">
          <EditPartDrawer selectedPart={row} />
          <DeletePartPopover selectedId={row.id} />
        </Group>
      );
    }
  }
];

export default PartColumns;
