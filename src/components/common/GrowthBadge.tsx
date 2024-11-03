import { Badge, rem } from '@mantine/core'
import { IconArrowNarrowUp } from '@tabler/icons-react'
import { ReactNode } from 'react'

type GrowthBadgeProps = {
  children: ReactNode
  loss?: boolean
}

const GrowthBadge = ({ children, loss }: GrowthBadgeProps) => {
  return (
    <Badge
      color={loss ? 'orange.6' : 'lime.6'}
      variant="light"
      style={{
        border: `1px solid var(--mantine-color-${
          loss ? 'orange-6' : 'lime-6'
        })`,
      }}
      leftSection={
        <IconArrowNarrowUp style={{ width: rem(15), height: rem(15) }} />
      }
    >
      {children}%
    </Badge>
  )
}

export default GrowthBadge

{
  /* <Badge
color="orange.6"
variant="light"
style={{
  border: "1px solid var(--mantine-color-orange-6)",
}}
leftSection={
  <IconArrowNarrowUp
    style={{ width: rem(15), height: rem(15) }}
  />
}
>
12%
</Badge> */
}
