"use client";

import { useDisclosure } from "@mantine/hooks";

import { ModelColumns } from "./model-columns";
import { ModelListModel } from "@/lib/models/model.model";
import IproButton from "@/components/core/IproButton";
import Table from "@/components/common/Table";
import ModelDrawer from "./ModelDrawer";

const ModelList = ({ models }: { models: ModelListModel }) => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <ModelDrawer opened={opened} close={close} />
      <Table
        title="Models List"
        description="Models of different brand's electronics"
        columns={ModelColumns}
        data={models}
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
