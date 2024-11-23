import { useDisclosure } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";

import ModelDrawer from "./ModelDrawer";
import IproButton from "@/components/core/IproButton";
import { ModelModel } from "@/lib/models/model.model";

const EditModelDrawer = ({ selectedModel }: { selectedModel: ModelModel }) => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <ModelDrawer
        title="Edit Model Info"
        selectedModel={selectedModel}
        opened={opened}
        close={close}
      />
      <IproButton variant="subtle" isIconOnly onClick={open}>
        <IconEdit />
      </IproButton>
    </>
  );
};

export default EditModelDrawer;
