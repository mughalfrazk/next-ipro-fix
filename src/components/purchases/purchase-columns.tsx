"use client";

import { Avatar, Group, NumberFormatter, Stack, Text, Title } from "@mantine/core";
import { redirect } from "next/navigation";
import Link from "next/link";
import { SupplierWithPurchasesModel } from "@/lib/models/supplier.model";

export const createNewJobHandler = () => {
  redirect("/dashboard/job/purchases");
};

export const PurchaseColumns = [
  {
    accessor: "Job ID",
    render: (row: SupplierWithPurchasesModel) => {
      return (
        <Link href={`/dashboard/job/${row.id}`}>
          <Text fw={"bold"} c={"primary.6"}>
            {row.id.slice(-5)}
          </Text>
        </Link>
      );
    }
  },
  {
    accessor: "Supplier",
    render: (row: SupplierWithPurchasesModel) => {
      return (
        <Group>
          <Avatar key={row.name} name={row.name} color="initials" />
          <Stack gap={2}>
            <Title order={6}>{row.name}</Title>
            <Text size={"0.7rem"}>{row.description}</Text>
          </Stack>
        </Group>
      );
    }
  },
  {
    accessor: "Parts",
    render: (row: SupplierWithPurchasesModel) => {
      return (
        <Text>
          {row.purchases.reduce(
            (prev, curr) => `${prev}${!!prev ? ", " : ""}${curr.part?.name}`,
            ""
          )}
        </Text>
      );
    }
  },
  {
    accessor: "QTY",
    render: (row: SupplierWithPurchasesModel) => {
      return (
        <Text>
          {row.purchases.reduce((prev, curr) => `${prev}${!!prev ? ", " : ""}${curr.quantity}`, "")}
        </Text>
      );
    }
  },
  {
    accessor: "Total Amount",
    textAlign: "right",
    render: (row: SupplierWithPurchasesModel) => {
      return (
        <NumberFormatter
          prefix="AED "
          value={row.purchases.reduce((prev, curr) => prev + curr.total, 0)}
          thousandSeparator
        />
      );
    }
  }
];
