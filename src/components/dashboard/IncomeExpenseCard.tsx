"use client"

import { ReactNode } from "react"
import {
  Card,
  Group,
  Stack,
  Title,
  CardProps,
  ThemeIcon,
  Text,
  NumberFormatter,
} from "@mantine/core"

import GrowthBadge from "../common/GrowthBadge"

type IncomeExpenseCardProps = {
  children: ReactNode
  icon: ReactNode
  iconColor: string
  amount: number
  percentage: number
  loss?: boolean
} & CardProps

const IncomeExpenseCard = ({
  children,
  iconColor,
  percentage,
  amount,
  icon,
  loss,
  ...props
}: IncomeExpenseCardProps) => {
  return (
    <Card {...props}>
      <Stack h="100%" justify="space-between">
        <Group justify="space-between">
          <Title order={4}>{children}</Title>
          <ThemeIcon variant="light" size="xl" color={iconColor}>
            {icon}
          </ThemeIcon>
        </Group>
        <Stack gap={0}>
          <Title order={3}>
            <NumberFormatter prefix="$" value={amount} thousandSeparator />
          </Title>
          <Group align="center" gap={10} mt={5}>
            <GrowthBadge loss={!!loss}>{percentage}</GrowthBadge>
            <Text size="xs">vs last week</Text>
          </Group>
        </Stack>
      </Stack>
    </Card>
  )
}

export default IncomeExpenseCard
