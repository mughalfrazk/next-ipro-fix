'use client'

import { Avatar, Badge, Group, Stack, Text, Title } from '@mantine/core'
import { JobModel } from '@/lib/models/job.model'
import { redirect } from 'next/navigation'

const colorForJobStatus = (name: string) => {
  console.log(name)
  return name === 'Device Received'
    ? 'grape'
    : name === 'Pending Work'
      ? 'red'
      : name === 'Pending Approval'
        ? 'indigo'
        : name === 'Job Done'
          ? 'cyan'
          : name === 'Delivered'
            ? 'green'
            : 'black'
}

export const createNewJobHandler = () => {
  redirect('/dashboard/job/add-new')
}

export const JobColumns = [
  {
    accessor: 'jobId',
    render: () => {
      return 'Job no'
    },
  },
  {
    accessor: 'customer',
    title: 'Customer',
    render: (row: JobModel) => {
      return (
        <Group>
          <Avatar
            key={row.customer.name}
            name={row.customer.name}
            color="initials"
          />
          <Stack gap={2}>
            <Title order={6}>{row.customer.name}</Title>
            <Text size={'0.7rem'}>{row.customer.phone}</Text>
          </Stack>
        </Group>
      )
    },
  },
  {
    accessor: 'status',
    render: (row: JobModel) => {
      return (
        <Badge
          variant="outline"
          color={colorForJobStatus(row.job_status.name)}
          radius="sm"
          p={12}
        >
          {row.job_status.name}
        </Badge>
      )
    },
  },
  {
    accessor: 'quantity',
    render: (row: JobModel) => {
      return row.issues.reduce((prev, curr) => prev + curr.quantity, 0)
    },
  },
  {
    title: 'Company Name',
    accessor: 'customer.company_name',
  },
  {
    accessor: 'technician',
    render: (row: JobModel) => {
      return !!row?.technician ? (
        <Group>
          <Avatar
            key={row.technician.id}
            name={`${row.technician.first_name} ${row.technician.last_name}`}
            color="initials"
          />
          <Stack gap={2}>
            <Title
              order={6}
            >{`${row.technician.first_name} ${row.technician.last_name}`}</Title>
            <Text
              size={'0.7rem'}
            >{`${row.technician.first_name} ${row.technician.last_name}`}</Text>
          </Stack>
        </Group>
      ) : (
        <Text opacity={0.4}>
          <i>No Staff Assigned</i>
        </Text>
      )
    },
  },
  {
    accessor: 'total',
    render: (row: JobModel) => {
      return row.issues.reduce((prev, curr) => prev + curr.total, 0)
    },
  },
]
