"use client";

import Table from "../common/Table";
import IproButton from "../core/IproButton";
import { CustomerColumns } from "./customer-column";
import { CustomerListModel } from "@/lib/models/customer.model";
import { useDisclosure } from "@mantine/hooks";
import CustomerDrawer from "./CustomerDrawer";

const CustomerList = ({ customers }: { customers: CustomerListModel }) => {
  const [opened, { open, close }] = useDisclosure();
  return (
    <>
      <CustomerDrawer opened={opened} close={close} />
      <Table
        title="Total Customers"
        description="All customers details"
        search={true}
        rightSection={
          <IproButton fullWidth onClick={open}>
            Create New Customer
          </IproButton>
        }
        columns={CustomerColumns}
        data={customers}
        drawerTitle={"Customer Filter"}
        filter={"hello world"}
      />
    </>
  );
};

export default CustomerList;
