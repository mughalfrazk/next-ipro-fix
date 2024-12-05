import { useDisclosure } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import IproButton from "@/components/core/IproButton";
import { PartModel } from "@/lib/models/part.model";
import PartDrawer from "./PartDrawer";

const EditPartDrawer = ({ selectedPart }: { selectedPart: PartModel }) => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <PartDrawer
        title="Edit Model Info"
        selectedPart={selectedPart}
        opened={opened}
        close={close}
      />
      <IproButton variant="subtle" isIconOnly onClick={open}>
        <IconEdit />
      </IproButton>
    </>
  );
};

export default EditPartDrawer;
