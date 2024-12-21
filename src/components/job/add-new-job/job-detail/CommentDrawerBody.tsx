import IproButton from "@/components/core/IproButton";
import IproTextInput from "@/components/core/IproTextInput";
import { useFormAction } from "@/hooks/use-form-action";
import { createCommentAction } from "@/lib/actions/comment.action";
import { JobModel } from "@/lib/models/job.model";
import { showDateNicely } from "@/utils/functions";
import { Avatar, Badge, Box, Group, Stack, Text, Textarea } from "@mantine/core";

const CommentDrawerBody = ({ job }: { job: JobModel }) => {
  const { formAction, getFieldErrorProps } = useFormAction(createCommentAction, {});

  return (
    <Box pos="relative" h="92.8vh" style={{ borderTop: "1px solid var(--mantine-color-dark-6)" }}>
      <Stack style={{ overflowY: "auto" }} h="77.8vh" gap={0} px={22}>
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
                {item.created_by.role.name}
              </Badge>
            </Group>
            <Text>{item.comment}</Text>
          </Stack>
        ))}
      </Stack>
      <form action={formAction}>
        <Stack
          pos="absolute"
          bg="var(--mantine-color-dark-8)"
          style={{ borderTop: "1px solid var(--mantine-color-dark-6)" }}
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
            {...getFieldErrorProps("comment")}
          />
          <IproButton isSubmit={true}>Add Comment</IproButton>
        </Stack>
      </form>
    </Box>
  );
};

export default CommentDrawerBody;
