"use client";

import { CustomerModel } from "@/lib/models/customer.model";
import EditCustomerDrawer from "./EditCustomerDrawer";
import { Text, Avatar, Stack, Title, Group } from "@mantine/core";
import { showDateNicely } from "@/utils/functions";
import DeleteCustomerPopover from "./DeleteCustomerPopover";

export const CustomerColumns = [
  {
    accessor: "id",
    render: (row: CustomerModel) => {
      return row.id.slice(-5);
    }
  },
  {
    accessor: "Customer",
    render: (row: CustomerModel) => {
      return (
        <Group>
          <Avatar src="../../assets/Avatar_man.png" alt="user_image" />
          <Stack gap={2}>
            <Title order={6}>{`${row.name}`}</Title>
            <Text size="sm">{`${row.phone}`}</Text>
          </Stack>
        </Group>
      );
    }
  },
  {
    accessor: "company_name"
  },
  {
    accessor: "created_at",
    render: (row: CustomerModel) => {
      return showDateNicely(row.created_at);
    }
  },
  {
    accessor: "actions",
    textAlign: "right",
    render: (row: CustomerModel) => {
      return (
        <Group gap={0} justify="flex-end">
          <EditCustomerDrawer selectedCustomer={row} />
          <DeleteCustomerPopover selectedId={row.id} />
        </Group>
      );
    }
  }
];
