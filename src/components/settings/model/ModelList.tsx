"use client";

import { useDisclosure } from "@mantine/hooks";
import Table from "@/components/common/Table";
import IproButton from "@/components/core/IproButton";
import ModelDrawer from "./ModelDrawer";

const ModelList = () => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <ModelDrawer opened={opened} close={close} />
      <Table
        title="Models List"
        description="Models of different brand's electronics"
        rightSection={
          <IproButton fullWidth onClick={open}>
            Create New Model
          </IproButton>
        }
      />
    </>
  );
};

export default ModelList;
