'use client'

import { useProfileContext } from '@/context/profile.context'
import { Avatar, Group, LoadingOverlay, Stack, Text } from '@mantine/core'

const Footer = () => {
  const {
    loading,
    data: { email, first_name, last_name },
  } = useProfileContext()

  return (
    <Group p={20} pos={'relative'}>
      <LoadingOverlay visible={loading} loaderProps={{ type: 'oval' }} />
      <Avatar src={'https://cdn-icons-png.flaticon.com/512/147/147131.png'} />
      <Stack gap={0}>
        <Text fw={500}>{`${first_name} ${last_name}`}</Text>
        <Text size="sm" opacity={0.6}>
          {email}
        </Text>
      </Stack>
    </Group>
  )
}

export default Footer
