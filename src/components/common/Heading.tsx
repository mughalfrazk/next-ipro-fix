import { Stack, Title, Text, StackProps } from "@mantine/core"

type HeadingProps = {
  title: string
  description?: string
  color?: string
} & StackProps

const Heading = ({
  title,
  description,
  color,
  ...otherProps
}: HeadingProps) => {
  return (
    <Stack gap={0} {...otherProps}>
      <Title order={4} c={color}>
        {title}
      </Title>
      {description && (
        <Text size="xs" c={color}>
          {description}
        </Text>
      )}
    </Stack>
  )
}

export default Heading
