"use client";

import { SupplierModel } from "@/lib/models/supplier.model";
import { Avatar, Stack, Title, Group } from "@mantine/core";
import { showDateNicely } from "@/utils/functions";
import DeleteSupplierPopover from "./DeleteSupplierPopover";
import EditSupplierDrawer from "./EditSupplierDrawer";

export const SupplierColumns = [
  {
    accessor: "id",
    render: (row: SupplierModel) => {
      return row.id.slice(-5);
    }
  },

  {
    accessor: "Customer",
    render: (row: SupplierModel) => {
      return (
        <Group>
          <Avatar src="../../assets/Avatar_man.png" alt="user_image" />
          <Stack gap={2}>
            <Title order={6}>{`${row.name}`}</Title>
          </Stack>
        </Group>
      );
    }
  },
  {
    accessor: "description"
  },
  {
    accessor: "created_at",
    render: (row: SupplierModel) => {
      return showDateNicely(row.created_at);
    }
  },
  {
    accessor: "actions",
    textAlign: "right",
    render: (row: SupplierModel) => {
      return (
        <Group gap={0} justify="flex-end">
          <EditSupplierDrawer selectedSupplier={row} />
          <DeleteSupplierPopover selectedId={row.id} />
        </Group>
      );
    }
  }
];
