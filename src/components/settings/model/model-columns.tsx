import IproButton from "@/components/core/IproButton";
import { ModelModel } from "@/lib/models/model.model";
import { showDateNicely } from "@/utils/functions";
import { Group } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
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
          <IproButton isIconOnly variant="subtle">
            <IconTrash color="var(--mantine-color-red-6)" />
          </IproButton>
        </Group>
      );
    }
  }
];
