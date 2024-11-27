import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteProblemApi } from "@/lib/services/api/problem.service";
import { getFormattedError } from "@/utils/format-error";
import { showErrorNotification } from "@/utils/functions";
import { IconTrash } from "@tabler/icons-react";
import { ActionIcon, Popover, Stack, Text } from "@mantine/core";
import IproButton from "@/components/core/IproButton";

const DeleteProblemPopover = ({ selectedId }: { selectedId: number }) => {
  const router = useRouter();
  const [opened, setOpened] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onDeleteHandler = async () => {
    try {
      setLoading(true);
      await deleteProblemApi(selectedId);
      router.push("/dashboard/settings/issue");
      router.refresh();
    } catch (error) {
      const e = getFormattedError(error);
      showErrorNotification(e.errors?.formErrors?.[0]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Popover
      withArrow
      width={200}
      shadow="md"
      position="bottom"
      opened={opened}
      onChange={setOpened}
    >
      <Popover.Target>
        <ActionIcon size="lg" variant="subtle" onClick={() => setOpened((e) => !e)}>
          <IconTrash color="var(--mantine-color-red-6)" />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">Are you sure you want to delete this data?</Text>
        <Stack mt={10} gap={4}>
          <IproButton fullWidth variant="subtle" onClick={() => setOpened(false)}>
            Cancel
          </IproButton>
          <IproButton fullWidth onClick={onDeleteHandler} loading={loading}>
            Confirm
          </IproButton>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default DeleteProblemPopover;
