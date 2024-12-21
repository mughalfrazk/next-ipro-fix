"use client";

import { ReactNode, useState, useEffect, Dispatch, SetStateAction } from "react";
import { useDisclosure } from "@mantine/hooks";
import { DataTable } from "mantine-datatable";
import { IconFilter, IconSearch, IconX } from "@tabler/icons-react";
import {
  Avatar,
  Badge,
  Card,
  Drawer,
  Grid,
  Group,
  Paper,
  rem,
  Stack,
  Text,
  Title
} from "@mantine/core";

import IproButton from "../core/IproButton";
import IproTextInput from "../core/IproTextInput";
import Heading from "./Heading";
import classes from "./Table.module.css";

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

export type AppliedFiltersType = {
  name: string;
  value: string;
  data: unknown;
};

type TableProps<T> = {
  title?: string;
  initialData?: T[];
  data?: T[];
  setFilteredData?: Dispatch<SetStateAction<T[]>>;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  columns?: any;
  description?: string;
  search?: boolean;
  searchProperty?: string;
  rightSection?: ReactNode;
  filter?: (
    closeFilter: () => void,
    appliedFilters: AppliedFiltersType[],
    setAppliedFilters: Dispatch<SetStateAction<AppliedFiltersType[]>>
  ) => ReactNode | undefined;
  drawerTitle?: string;
  pagination?: boolean;
  PAGE_SIZE?: number;
  p?: number
};

export const Table = <T extends object>({
  columns = dummy_columns,
  initialData,
  data = dummy_rows as T[],
  setFilteredData,
  title,
  description,
  search,
  rightSection,
  drawerTitle,
  filter,
  pagination = true,
  PAGE_SIZE = 10,
  p
}: TableProps<T>) => {
  const [opened, { open, close }] = useDisclosure();

  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(
    (data as unknown[]).slice(0, pagination ? PAGE_SIZE : data.length)
  );
  const [appliedFilters, setAppliedFilters] = useState<AppliedFiltersType[]>([]);
  const [paginationProps, setPaginationProps] = useState({});

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords((data as unknown[]).slice(from, to));
  }, [page]);

  useEffect(() => {
    setRecords((data as unknown[]).slice(0, pagination ? PAGE_SIZE : data.length));
  }, [data]);

  useEffect(() => {
    if (pagination) {
      setPaginationProps({
        page: page,
        totalRecords: (data as unknown[]).length,
        recordsPerPage: PAGE_SIZE,
        onPageChange: (p: number) => setPage(p)
      });
    } else {
      setPaginationProps({
        page: null,
        totalRecords: null,
        recordsPerPage: null,
        onPageChange: null
      });
    }
  }, [pagination, page]);

  return (
    <>
      {!!filter && (
        <Drawer opened={opened} onClose={close} title={drawerTitle} position="top" size="320px">
          {filter(close, appliedFilters, setAppliedFilters)}
        </Drawer>
      )}
      <Card p={p}>
        <Grid align="center" justify="space-between" mb={20}>
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
        {!!appliedFilters.length && (
          <Paper px={8} py={6} radius="xl" my={10}>
            <Group justify="space-between">
              <Group>
                {appliedFilters.map((item) => (
                  <Badge key={item.name} color="var(--mantine-color-primary-6)" tt={"none"}>
                    {`${item.name}: ${item.value}`}
                  </Badge>
                ))}
              </Group>
              <IproButton
                size="xs"
                px={2}
                variant="light"
                radius="xl"
                isIconOnly={true}
                onClick={() => {
                  setAppliedFilters([]);
                  setFilteredData?.([...(initialData as T[])]);
                }}
              >
                <IconX style={{ width: rem(20), height: rem(20) }} />
              </IproButton>
            </Group>
          </Paper>
        )}
        <DataTable
          columns={columns}
          records={records}
          minHeight={100}
          classNames={classes}
          {...paginationProps}
        />
      </Card>
    </>
  );
};

export default Table;
