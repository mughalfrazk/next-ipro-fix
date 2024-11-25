import { BrandModel } from "@/lib/models/brand.model";
import { showDateNicely } from "@/utils/functions";
import { Group } from "@mantine/core";
import EditBrandDrawer from "./EditBrandDrawer";
import DeleteBrandPopover from "./DeleteBrandPopover";

export const BrandColumns = [
  {
    accessor: "name"
  },
  {
    accessor: "description"
  },
  {
    accessor: "created_at",
    render: (row: BrandModel) => {
      return showDateNicely(row.created_at);
    }
  },
  {
    accessor: "action",
    textAlign: "right",
    render: (row: BrandModel) => {
      return (
        <Group gap={0} justify="flex-end">
          <EditBrandDrawer selectedBrand={row} />
          <DeleteBrandPopover selectedId={row.id} />
        </Group>
      );
    }
  }
];
