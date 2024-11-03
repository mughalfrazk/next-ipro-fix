'use client'

import {
  Card,
  CardProps,
  Group,
  NumberFormatter,
  Stack,
  Title,
  rem,
} from '@mantine/core'
import Heading from '../common/Heading'
import { IconCircleFilled, IconDotsVertical } from '@tabler/icons-react'
import { DonutChart } from '@mantine/charts'
import { useScreenSize } from '@/hooks/use.screen-size'

const JobTypesGraphCard = ({ ...props }: CardProps) => {
  const { isMobile, isLargeDesktop, isMidLargeDesktop } = useScreenSize()

  const jobTypes = [
    {
      name: 'SW-Software',
      value: 54071,
      color: 'var(--mantine-color-orange-6)',
    },
    {
      name: 'HW-Hardware',
      value: 32210,
      color: 'var(--mantine-color-violet-6)',
    },
    { name: 'GW-Android', value: 24410, color: 'var(--mantine-color-blue-5)' },
    { name: 'GW-Apple', value: 5034, color: 'var(--mantine-color-green-4)' },
  ]

  return (
    <Card {...props}>
      <Group justify="space-between">
        <Heading title="Number of Job Types" description="Weekly Report" />
        <IconDotsVertical style={{ width: rem(28), height: rem(28) }} />
      </Group>
      <Stack justify="center" h="100%" px={10} py={{ md: 0, base: 30 }}>
        <Group justify="space-between" align="center" px={{ lg: 0, base: 40 }}>
          <Stack gap={30}>
            {jobTypes.map((item, idx) => (
              <Stack key={idx} gap={0}>
                <Group align="center" gap={8}>
                  <IconCircleFilled
                    color={item.color}
                    style={{ width: rem(14), height: rem(14) }}
                  />
                  {item.name}
                </Group>
                <Title order={3}>
                  <NumberFormatter value={item.value} thousandSeparator />
                </Title>
              </Stack>
            ))}
          </Stack>
          <DonutChart
            size={
              isMobile
                ? 250
                : isMidLargeDesktop
                  ? 300
                  : isLargeDesktop
                    ? 250
                    : 350
            }
            thickness={30}
            paddingAngle={3}
            data={jobTypes}
          />
        </Group>
      </Stack>
    </Card>
  )
}

export default JobTypesGraphCard
