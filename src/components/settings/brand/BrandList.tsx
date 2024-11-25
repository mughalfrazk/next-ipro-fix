"use client";

import { useDisclosure } from "@mantine/hooks";
import BrandDrawer from "./BrandDrawer";
import Table from "@/components/common/Table";
import IproButton from "@/components/core/IproButton";
import { BrandListModel } from "@/lib/models/brand.model";
import { BrandColumns } from "./brand-columns";

const BrandList = ({ brands }: { brands: BrandListModel }) => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <BrandDrawer opened={opened} close={close} />
      <Table
        title="Brands List"
        description="Brands of different brand's electronics"
        columns={BrandColumns}
        data={brands}
        rightSection={
          <IproButton fullWidth onClick={open}>
            Create New Brand
          </IproButton>
        }
      />
    </>
  );
};

export default BrandList;
