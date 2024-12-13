"use client";

import Table from "../common/Table";
import { SupplierColumns } from "./supplier-column";
import IproButton from "../core/IproButton";
import { useDisclosure } from "@mantine/hooks";
import SupplierDrawer from "./SupplierDrawer";
import { SupplierListModel } from "@/lib/models/supplier.model";

const SupplierList = ({ suppliers }: { suppliers: SupplierListModel }) => {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <SupplierDrawer opened={opened} close={close} />
      <Table
        title="Suppliers List"
        description="All Suppliers Details"
        columns={SupplierColumns}
        data={suppliers}
        rightSection={
          <IproButton fullWidth onClick={open}>
            Create New Model
          </IproButton>
        }
      />
    </>
  );
};
export default SupplierList;
