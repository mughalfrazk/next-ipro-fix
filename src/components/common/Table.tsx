"use client";

import { DataTable } from "mantine-datatable";
import { IconSearch } from "@tabler/icons-react";
import { Avatar, Card, Grid, Group, Stack, Text, Title } from "@mantine/core";

import IproButton from "../core/IproButton";
import IproTextInput from "../core/IproTextInput";
import Heading from "./Heading";

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

const columns = [
  {
    accessor: "jobId",
    render: (row: RowType) => {
      return <IproButton variant="subtle">{row.jobId}</IproButton>;
    },
  },
  {
    accessor: "customer",
    title: "Customer",
    render: (row: RowType) => {
      return (
        <Group>
          <Avatar
            key={row.customer.name}
            name={row.customer.name}
            color="initials"
          />
          <Stack gap={2}>
            <Title order={6}>{row.customer.name}</Title>
            <Text size={"0.7rem"}>{row.customer.phone}</Text>
          </Stack>
        </Group>
      );
    },
  },
  { accessor: "status" },
  { accessor: "qty" },
  { accessor: "company_name" },
  {
    accessor: "technician",
    render: (row: RowType) => {
      return (
        <Group>
          <Avatar
            key={row.technician.name}
            name={row.technician.name}
            color="initials"
          />
          <Stack gap={2}>
            <Title order={6}>{row.technician.name}</Title>
            <Text size={"0.7rem"}>{row.technician.phone}</Text>
          </Stack>
        </Group>
      );
    },
  },
  { accessor: "total" },
];

const data = [
  {
    id: "0",
    jobId: "Job-123",
    customer: {
      name: "John Doe",
      phone: "XXX XX XXXX",
    },
    status: "Pending Work",
    qty: 20,
    company_name: "Al humrah ltd",
    technician: {
      name: "Albert Fiennes",
      phone: "XXX XX XXXX",
    },
    total: "AED 23000",
  },
  {
    id: "1",
    jobId: "Job-123",
    customer: {
      name: "John Doe",
      phone: "XXX XX XXXX",
    },
    status: "Pending Work",
    qty: 20,
    company_name: "Al humrah ltd",
    technician: {
      name: "Albert Fiennes",
      phone: "XXX XX XXXX",
    },
    total: "AED 23000",
  },
  {
    id: "2",
    jobId: "Job-123",
    customer: {
      name: "John Doe",
      phone: "XXX XX XXXX",
    },
    status: "Pending Work",
    qty: 20,
    company_name: "Al humrah ltd",
    technician: {
      name: "Albert Fiennes",
      phone: "XXX XX XXXX",
    },
    total: "AED 23000",
  },
  {
    id: "3",
    jobId: "Job-123",
    customer: {
      name: "John Doe",
      phone: "XXX XX XXXX",
    },
    status: "Pending Work",
    qty: 20,
    company_name: "Al humrah ltd",
    technician: {
      name: "Albert Fiennes",
      phone: "XXX XX XXXX",
    },
    total: "AED 23000",
  },
];

type TableProps = {
  title?: string;
  description?: string;
  search?: boolean;
  searchProperty?: string;
  button?: boolean;
};

const Table = ({ title, description, search, button }: TableProps) => {
  return (
    <Card>
      <Grid align="center" mb={30}>
        {title && (
          <Grid.Col span={2}>
            <Heading title={title} description={description} />
          </Grid.Col>
        )}
        {search && (
          <Grid.Col span={!title && !button ? 12 : button ? 8 : 10}>
            <IproTextInput
              placeholder="Search anything here"
              width={"100%"}
              leftSection={<IconSearch />}
            />
          </Grid.Col>
        )}
        {button && (
          <Grid.Col span={2}>
            <IproButton variant="outline" fullWidth>
              Create New Job
            </IproButton>
          </Grid.Col>
        )}
      </Grid>
      <DataTable
        columns={columns}
        records={data}
        minHeight={100}
        classNames={{
          root: "mantine-table-root",
        }}
      />
    </Card>
  );
};

export default Table;
