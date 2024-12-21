"use client";

import { ExpenseTypeModel } from "@/lib/models/expense.model";
import { showDateNicely } from "@/utils/functions";
import ExpenseTypeDrawer from "./EditExpenseTypeDrawer";
import { Group } from "@mantine/core";
import DeleteExpenseTypePopover from "./DeleteExpenseTypePopover";

export const ExpenseTypeColumns = [
  {
    accessor: "id"
  },
  {
    accessor: "name"
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
