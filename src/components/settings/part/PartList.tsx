"use client";

import { useDisclosure } from "@mantine/hooks";
import IproButton from "@/components/core/IproButton";
import Table from "@/components/common/Table";
import { PartColumns } from "./part-columns";
import { PartListModel } from "@/lib/models/part.model";
import PartDrawer from "./PartDrawer";

const PartList = ({ parts }: { parts: PartListModel }) => {
  const [opened, { open, close }] = useDisclosure();
  return (<>
    <PartDrawer opened={opened} close={close} />
    <Table
      title="Part List"
      description="Parts of different brand's electronics"
      columns={PartColumns}
      data={parts}
      rightSection={<IproButton fullWidth onClick={open}>Create New Model</IproButton>}
    />
  </>
  );
};

export default PartList;
