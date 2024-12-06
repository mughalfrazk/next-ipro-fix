"use client";

import { ReactNode, useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { DataTable } from "mantine-datatable";
import { IconFilter, IconSearch } from "@tabler/icons-react";
import {
  Avatar,
  Card,
  Drawer,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme
} from "@mantine/core";

import IproButton from "../core/IproButton";
import IproTextInput from "../core/IproTextInput";
import Heading from "./Heading";
import classes from "./Table.module.css"

type RowType = {
  id: string;
  jobId: string;
  customer: {
    name: string;
    phone: string;
  };
  status: string;
  qty: number;
  company_name: string;
  technician: {
    name: string;
    phone: string;
  };
  total: string;
};

const dummy_columns = [
  {
    accessor: "id",
    render: (row: RowType) => {
      return <IproButton variant="subtle">{row.id}</IproButton>;
    }
  },
  {
    accessor: "customer",
    title: "Customer",
    render: (row: RowType) => {
      return (
        <Group>
          <Avatar key={row.customer.name} name={row.customer.name} color="initials" />
          <Stack gap={2}>
            <Title order={6}>{row.customer.name}</Title>
            <Text size={"0.7rem"}>{row.customer.phone}</Text>
          </Stack>
        </Group>
      );
    }
  },
  { accessor: "status" },
  { accessor: "qty" },
  { accessor: "company_name" },
  {
    accessor: "technician",
    render: (row: RowType) => {
      return (
        <Group>
          <Avatar key={row.technician.name} name={row.technician.name} color="initials" />
          <Stack gap={2}>
            <Title order={6}>{row.technician.name}</Title>
            <Text size={"0.7rem"}>{row.technician.phone}</Text>
          </Stack>
        </Group>
      );
    }
  },
  { accessor: "total" }
];

const dummy_rows = [
  {
    id: "01",
    customer: {
      name: "John Doe",
      phone: "XXX XX XXXX"
    },
    status: "Pending Work",
    qty: 20,
    company_name: "Al humrah ltd",
    technician: {
      name: "Albert Fiennes",
      phone: "XXX XX XXXX"
    },
    total: "AED 23000"
  },
  {
    id: "02",
    customer: {
      name: "John Doe",
      phone: "XXX XX XXXX"
    },
    status: "Pending Work",
    qty: 20,
    company_name: "Al humrah ltd",
    technician: {
      name: "Albert Fiennes",
      phone: "XXX XX XXXX"
    },
    total: "AED 23000"
  },
  {
    id: "03",
    customer: {
      name: "John Doe",
      phone: "XXX XX XXXX"
    },
    status: "Pending Work",
    qty: 20,
    company_name: "Al humrah ltd",
    technician: {
      name: "Albert Fiennes",
      phone: "XXX XX XXXX"
    },
    total: "AED 23000"
  },
  {
    id: "04",
    customer: {
      name: "John Doe",
      phone: "XXX XX XXXX"
    },
    status: "Pending Work",
    qty: 20,
    company_name: "Al humrah ltd",
    technician: {
      name: "Albert Fiennes",
      phone: "XXX XX XXXX"
    },
    total: "AED 23000"
  },
  {
    id: "05",
    customer: {
      name: "John Doe",
      phone: "XXX XX XXXX"
    },
    status: "Pending Work",
    qty: 20,
    company_name: "Al humrah ltd",
    technician: {
      name: "Albert Fiennes",
      phone: "XXX XX XXXX"
    },
    total: "AED 23000"
  },
  {
    id: "06",
    customer: {
      name: "John Doe",
      phone: "XXX XX XXXX"
    },
    status: "Pending Work",
    qty: 20,
    company_name: "Al humrah ltd",
    technician: {
      name: "Albert Fiennes",
      phone: "XXX XX XXXX"
    },
    total: "AED 23000"
  },
  {
    id: "07",
    customer: {
      name: "John Doe",
      phone: "XXX XX XXXX"
    },
    status: "Pending Work",
    qty: 20,
    company_name: "Al humrah ltd",
    technician: {
      name: "Albert Fiennes",
      phone: "XXX XX XXXX"
    },
    total: "AED 23000"
  },
  {
    id: "08",
    customer: {
      name: "John Doe",
      phone: "XXX XX XXXX"
    },
    status: "Pending Work",
    qty: 20,
    company_name: "Al humrah ltd",
    technician: {
      name: "Albert Fiennes",
      phone: "XXX XX XXXX"
    },
    total: "AED 23000"
  },
  {
    id: "09",
    customer: {
      name: "John Doe",
      phone: "XXX XX XXXX"
    },
    status: "Pending Work",
    qty: 20,
    company_name: "Al humrah ltd",
    technician: {
      name: "Albert Fiennes",
      phone: "XXX XX XXXX"
    },
    total: "AED 23000"
  },
  {
    id: "10",
    customer: {
      name: "John Doe",
      phone: "XXX XX XXXX"
    },
    status: "Pending Work",
    qty: 20,
    company_name: "Al humrah ltd",
    technician: {
      name: "Albert Fiennes",
      phone: "XXX XX XXXX"
    },
    total: "AED 23000"
  },
  {
    id: "11",
    customer: {
      name: "John Doe",
      phone: "XXX XX XXXX"
    },
    status: "Pending Work",
    qty: 20,
    company_name: "Al humrah ltd",
    technician: {
      name: "Albert Fiennes",
      phone: "XXX XX XXXX"
    },
    total: "AED 23000"
  },
  {
    id: "12",
    customer: {
      name: "John Doe",
      phone: "XXX XX XXXX"
    },
    status: "Pending Work",
    qty: 20,
    company_name: "Al humrah ltd",
    technician: {
      name: "Albert Fiennes",
      phone: "XXX XX XXXX"
    },
    total: "AED 23000"
  },
  {
    id: "13",
    customer: {
      name: "John Doe",
      phone: "XXX XX XXXX"
    },
    status: "Pending Work",
    qty: 20,
    company_name: "Al humrah ltd",
    technician: {
      name: "Albert Fiennes",
      phone: "XXX XX XXXX"
    },
    total: "AED 23000"
  },
  {
    id: "14",
    customer: {
      name: "John Doe",
      phone: "XXX XX XXXX"
    },
    status: "Pending Work",
    qty: 20,
    company_name: "Al humrah ltd",
    technician: {
      name: "Albert Fiennes",
      phone: "XXX XX XXXX"
    },
    total: "AED 23000"
  }
];

type TableProps = {
  title?: string;
  data?: unknown[];
  /* eslint-disable @typescript-eslint/no-explicit-any */
  columns?: any;
  description?: string;
  search?: boolean;
  searchProperty?: string;
  rightSection?: ReactNode;
  filter?: ReactNode;
  drawerTitle?: string;
  PAGE_SIZE?: number;
};

export const Table = ({
  columns = dummy_columns,
  data = dummy_rows,
  title,
  description,
  search,
  rightSection,
  filter,
  drawerTitle,
  PAGE_SIZE = 10
}: TableProps) => {
  const [opened, { open, close }] = useDisclosure();
  const theme = useMantineTheme();

  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(data.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(data.slice(from, to));
  }, [page]);

  return (
    <>
      {!!filter && (
        <Drawer opened={opened} onClose={close} title={drawerTitle} position="top" size="320px">
          {filter}
        </Drawer>
      )}
      <Card>
        <Grid align="center" justify="space-between" mb={30}>
          {title && (
            <Grid.Col span={2}>
              <Heading title={title} description={description} />
            </Grid.Col>
          )}
          {search && (
            <Grid.Col span={!title && !rightSection ? 12 : rightSection ? 8 : 10}>
              <IproTextInput
                placeholder="Search anything here"
                width={"100%"}
                leftSection={<IconSearch />}
                rightSection={
                  <IproButton size="md" px={4} radius="sm" isIconOnly onClick={open}>
                    <IconFilter />
                  </IproButton>
                }
              />
            </Grid.Col>
          )}
          {!!rightSection && <Grid.Col span={2}>{rightSection}</Grid.Col>}
        </Grid>
        <DataTable
          columns={columns}
          records={records}
          minHeight={100}
          classNames={classes}
          totalRecords={data.length}
          recordsPerPage={PAGE_SIZE}
          page={page}
          onPageChange={(p) => setPage(p)}
        />
      </Card>
    </>
  );
};

export default Table;
