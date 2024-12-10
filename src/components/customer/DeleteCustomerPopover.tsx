import { useState } from "react";
import { IconTrash } from "@tabler/icons-react";
import { ActionIcon, Popover, Stack, Text } from "@mantine/core";

import IproButton from "@/components/core/IproButton";
import { getFormattedError } from "@/utils/format-error";
import { showErrorNotification } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { createCustomerApi } from "@/lib/services/api/customer.service";
import { CustomerModel } from "@/lib/models/customer.model";

const DeleteCustomerPopover = ({ selectedCustomer }: { selectedCustomer: CustomerModel }) => {
  const router = useRouter();
  const [opened, setOpened] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onDeleteHandler = async () => {
    try {
      setLoading(true);
      await createCustomerApi(selectedCustomer);

      router.push("/dashboard/customer");
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

export default DeleteCustomerPopover;
