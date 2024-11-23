import { Group } from "@mantine/core";

import DeleteModelPopover from "./DeleteModelPopover";
import { ModelModel } from "@/lib/models/model.model";
import { showDateNicely } from "@/utils/functions";
import EditModelDrawer from "./EditModelDrawer";

export const ModelColumns = [
  {
    accessor: "name"
  },
  {
    accessor: "description"
  },
  {
    accessor: "created_at",
    render: (row: ModelModel) => {
      return showDateNicely(row.created_at);
    }
  },
  {
    accessor: "action",
    textAlign: "right",
    render: (row: ModelModel) => {
      return (
        <Group gap={0} justify="flex-end">
          <EditModelDrawer selectedModel={row} />
          <DeleteModelPopover selectedId={row.id} />
        </Group>
      );
    }
  }
];
