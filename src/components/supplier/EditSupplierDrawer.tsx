import { useDisclosure } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import IproButton from "@/components/core/IproButton";
import { SupplierModel } from "@/lib/models/supplier.model";
import SupplierDrawer from "./SupplierDrawer";

const EditSupplierDrawer = ({ selectedSupplier }: { selectedSupplier: SupplierModel }) => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <SupplierDrawer
        title="Edit Model Info"
        selectedSupplier={selectedSupplier}
        opened={opened}
        close={close}
      />
      <IproButton variant="subtle" isIconOnly onClick={open}>
        <IconEdit />
      </IproButton>
    </>
  );
};

export default EditSupplierDrawer;
