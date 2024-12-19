import IproButton from "@/components/core/IproButton";
import { Avatar, Badge, Box, Group, Stack, Text, Textarea } from "@mantine/core";

const CommentDrawerBody = () => {
  const comments = [
    {
      user: {
        name: "Dianne Russell",
        status: "Technician"
      },
      date: "2020-06-11 10:56",
      comment: "It will take 2-3 hours"
    },
    {
      user: {
        name: "Albert Flores",
        status: "Staff"
      },
      date: "2020-05-01 06:05",
      comment: "Need in one hour"
    },
    {
      user: {
        name: "Dianne Russell",
        status: "Technician"
      },
      date: "2020-06-11 10:56",
      comment: "It will take 2-3 hours"
    },
    {
      user: {
        name: "Albert Flores",
        status: "Staff"
      },
      date: "2020-05-01 06:05",
      comment: "Need in one hour"
    },
    {
      user: {
        name: "Dianne Russell",
        status: "Technician"
      },
      date: "2020-06-11 10:56",
      comment: "It will take 2-3 hours"
    },
    {
      user: {
        name: "Dianne Russell",
        status: "Technician"
      },
      date: "2020-06-11 10:56",
      comment: "It will take 2-3 hours"
    },
    {
      user: {
        name: "Albert Flores",
        status: "Staff"
      },
      date: "2020-05-01 06:05",
      comment: "Need in one hour"
    },
    {
      user: {
        name: "Dianne Russell",
        status: "Technician"
      },
      date: "2020-06-11 10:56",
      comment: "It will take 2-3 hours"
    },
    {
      user: {
        name: "Dianne Russell",
        status: "Technician"
      },
      date: "2020-06-11 10:56",
      comment: "It will take 2-3 hours"
    },
    {
      user: {
        name: "Albert Flores",
        status: "Staff"
      },
      date: "2020-05-01 06:05",
      comment: "Need in one hour"
    },
    {
      user: {
        name: "Last User",
        status: "Technician"
      },
      date: "2020-06-11 10:56",
      comment: "It will take 2-3 hours"
    }
  ];

  return (
    <Box pos="relative" h="93.3vh" style={{ borderTop: "1px solid var(--mantine-color-dark-6)" }}>
      <Stack style={{ overflowY: "auto" }} h="77.8vh" gap={0} px={22}>
        {comments.map((item, idx) => (
          <Stack
            key={idx}
            className="borderedListItem"
            style={{
              borderBottom: "1px solid var(--mantine-color-default-border)"
            }}
            pt={15}
            pb={15}
          >
            <Group justify="space-between">
              <Group>
                <Avatar
                  src={"https://cdn-icons-png.flaticon.com/512/147/147131.png"}
                  size="md"
                  alt="user image"
                />
                <Stack gap={0}>
                  <Text size="sm" fw={500}>
                    {item.user.name}
                  </Text>
                  <Text size="xs" opacity={0.6}>
                    {item.date}
                  </Text>
                </Stack>
              </Group>
              <Badge size="lg" radius="md" variant="light" c="lime.7">
                {item.user.status}
              </Badge>
            </Group>
            <Text>{item.comment}</Text>
          </Stack>
        ))}
      </Stack>
      <Stack
        pos="absolute"
        bg="var(--mantine-color-dark-8)"
        style={{ borderTop: "1px solid var(--mantine-color-dark-6)" }}
        left={0}
        right={0}
        bottom={0}
        p={15}
      >
        <Textarea placeholder="Type anything..." />
        <IproButton>Add Comment</IproButton>
      </Stack>
    </Box>
  );
};

export default CommentDrawerBody;
