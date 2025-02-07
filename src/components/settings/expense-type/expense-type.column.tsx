"use client";

import { Group } from "@mantine/core";

import { ExpenseTypeModel } from "@/lib/models/expense-type.model";
import { showDateNicely } from "@/utils/functions";
import ExpenseTypeDrawer from "./EditExpenseTypeDrawer";
import DeleteExpenseTypePopover from "./DeleteExpenseTypePopover";

export const ExpenseTypeColumns = [
  {
    accessor: "id"
  },
  {
    accessor: "name"
  },
  {
    accessor: "description"
  },
  {
    accessor: "created_at",
    render: (row: ExpenseTypeModel) => {
      return showDateNicely(row.created_at);
    }
  },
  {
    accessor: "actions",
    textAlign: "right",
    render: (row: ExpenseTypeModel) => {
      return (
        <Group gap={0} justify="flex-end">
          <ExpenseTypeDrawer selectedExpenseType={row} />
          <DeleteExpenseTypePopover selectedId={row.id} />
        </Group>
      );
    }
  }
];
