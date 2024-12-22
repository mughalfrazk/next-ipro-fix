"use client";

import Table from "@/components/common/Table";
import { InvoiceTableModel } from "@/lib/models/invoice.model";
import { InvoiceColumns } from "./invoice-columns";
import InvoicesFilterBody from "./InvoicesFilterBody";

const InvoicesList = ({ invoices }: { invoices: InvoiceTableModel }) => {
  return (
    <Table
      title="Total Invoices"
      description="All invoices details"
      // search={true}
      data={invoices.invoices}
      drawerTitle={"Invoice Filter"}
      columns={InvoiceColumns}
      // filter={() => <InvoicesFilterBody />}
    />
  );
};

export default InvoicesList;
