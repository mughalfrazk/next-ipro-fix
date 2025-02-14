import { Modal, Button, Group, Box } from "@mantine/core";
import { ReactNode } from "react";
import IproButton from "../core/IproButton";

const ConfirmationModel = ({
  children,
  action,
  disclosure: { opened, close }
}: {
  children?: ReactNode;
  action: () => void;
  disclosure: { opened: boolean; close: () => void };
}) => {
  // const [opened, { open, close }] = useDisclosure(false)

  return (
    <Modal opened={opened} onClose={close} withCloseButton={false}>
      <Box>{children ?? "Are you sure?"}</Box>
      <Group justify="end" mt={20}>
        <IproButton variant="outline" onClick={close}>
          Cancel
        </IproButton>
        <IproButton onClick={action}>Confirm</IproButton>
      </Group>
    </Modal>
  );
};

export default ConfirmationModel;
