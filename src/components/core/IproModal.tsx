import { Group, Modal, ModalProps, Text } from "@mantine/core";
import IproButton from "./IproButton";

type IproModalProps = {
  moveFormard?: () => void;
  close?: () => void;
  confirmButtonText?: string;
  confirmButtonLoading?: boolean;
} & ModalProps;

const IproModal = ({
  title,
  children,
  moveFormard,
  confirmButtonText = "Confirm",
  confirmButtonLoading,
  ...otherProps
}: IproModalProps) => {
  return (
    <Modal
      title={
        <Text fw="bold" size="lg">
          {title}
        </Text>
      }
      {...otherProps}
    >
      {children}
      <Group
        mt="10"
        pt="sm"
        gap={10}
        justify="flex-end"
        style={{ borderTop: "1px solid var(--mantine-color-default-border)" }}
      >
        <IproButton onClick={otherProps.onClose} variant="outline">
          Cancel
        </IproButton>
        <IproButton
          onClick={!!moveFormard ? moveFormard : otherProps.onClose}
          loading={!!confirmButtonLoading}
        >
          {confirmButtonText}
        </IproButton>
      </Group>
    </Modal>
  );
};

export default IproModal;
