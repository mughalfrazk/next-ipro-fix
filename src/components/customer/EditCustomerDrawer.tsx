import { useDisclosure } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import IproButton from "@/components/core/IproButton";
import CustomerDrawer from "./CustomerDrawer";
import { CustomerModel } from "@/lib/models/customer.model";

const EditCustomerDrawer = ({ selectedCustomer }: { selectedCustomer: CustomerModel }) => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <CustomerDrawer
        title="Edit Model Info"
        selectedCustomer={selectedCustomer}
        opened={opened}
        close={close}
      />
      <IproButton variant="subtle" isIconOnly onClick={open}>
        <IconEdit />
      </IproButton>
    </>
  );
};

export default EditCustomerDrawer;
