import { Avatar, Badge, Box, Group, rem, Stack, Text, Textarea } from "@mantine/core";
import { IconMessages } from "@tabler/icons-react";

import IproButton from "@/components/core/IproButton";
import IproTextInput from "@/components/core/IproTextInput";
import { useFormAction } from "@/hooks/use-form-action";
import { useMantineColorScheme } from "@/hooks/use-mantine-color-scheme-wrapper";
import { createCommentAction } from "@/lib/actions/comment.action";
import { JobModel } from "@/lib/models/job.model";
import { showDateNicely } from "@/utils/functions";
import { useEffect, useState } from "react";

const CommentDrawerBody = ({ job }: { job: JobModel }) => {
  const { formAction, getFieldErrorProps } = useFormAction(createCommentAction, {});
  const { lightDark } = useMantineColorScheme();
  const [commentText, setCommentText] = useState("");
 useEffect(() => {
  setCommentText("");
 },[job.comments?.length])
  return (
    <Box pos="relative" h="92.8vh" style={{ boxShadow: "#00000038 0px 2px 5px -2px inset" }}>
      <Stack style={{ overflowY: "auto" }} h="77.8vh" gap={0} px={22}>
        {!job.comments?.length && (
          <Stack align="center" h="100%" gap={10} opacity={0.3} mt={100}>
            <IconMessages style={{ width: rem(100), height: rem(100) }} />
            <Text size="md" fw="bold">
              No conversation
            </Text>
          </Stack>
        )}
        {job?.comments?.map((item, idx) => (
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
                  size="sm"
                  alt="user image"
                />
                <Stack gap={0}>
                  <Text size="sm" fw={500}>
                    {`${item.created_by.first_name} ${item.created_by.last_name}`}
                  </Text>
                  <Text size="xs" opacity={0.6}>
                    {showDateNicely(item.created_at)}
                  </Text>
                </Stack>
              </Group>
              <Badge size="lg" radius="md" variant="light" c="lime.7">
                {item.created_by?.role?.name}
              </Badge>
            </Group>
            <Text>{item.comment}</Text>
          </Stack>
        ))}
      </Stack>
      <form action={formAction}>
        <Stack
          pos="absolute"
          bg={lightDark("var(--mantine-color-gray-2)", "var(--mantine-color-dark-8)")}
          style={{
            borderTop: `1px solid ${lightDark("var(--mantine-color-gray-4)", "var(--mantine-color-dark-6)")}`
          }}
          left={0}
          right={0}
          bottom={0}
          px={15}
          pb={10}
        >
          <IproTextInput type="text" name="job_id" defaultValue={job.id} display="none" />
          <Textarea
            name="comment"
            placeholder="Type anything..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <IproButton isSubmit={true}>Add Comment</IproButton>
        </Stack>
      </form>
    </Box>
  );
};

export default CommentDrawerBody;
