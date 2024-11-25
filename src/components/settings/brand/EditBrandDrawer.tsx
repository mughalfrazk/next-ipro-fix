import { useDisclosure } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import BrandDrawer from "./BrandDrawer";
import IproButton from "@/components/core/IproButton";
import { BrandModel } from "@/lib/models/brand.model";

const EditBrandDrawer = ({ selectedBrand }: { selectedBrand: BrandModel }) => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <BrandDrawer
        title="Edit Brand Info"
        selectedBrand={selectedBrand}
        opened={opened}
        close={close}
      />
      <IproButton variant="subtle" isIconOnly onClick={open}>
        <IconEdit />
      </IproButton>
    </>
  );
};

export default EditBrandDrawer;
