"use client";

import { useState } from "react";

import Table from "@/components/common/Table";
import InvoicesFilterBody from "./InvoicesFilterBody";
import { InvoiceColumns } from "./invoice-columns";
import { InvoiceTableListModel } from "@/lib/models/invoice.model";

const InvoicesList = ({ invoices }: { invoices: InvoiceTableListModel }) => {
  const [filteredInvoices, setFilteredInvoices] = useState<InvoiceTableListModel>(invoices);

  return (
    <Table
      title="Total Invoices"
      description="All invoices details"
      search={true}
      initialData={invoices}
      data={filteredInvoices}
      setFilteredData={setFilteredInvoices}
      drawerTitle={"Invoice Filter"}
      columns={InvoiceColumns}
      filter={(close, appliedFilters, setAppliedFilters) => (
        <InvoicesFilterBody
          invoices={invoices}
          close={close}
          appliedFilters={appliedFilters}
          setFilteredInvoices={setFilteredInvoices}
          setAppliedFilters={setAppliedFilters}
        />
      )}
    />
  );
};

export default InvoicesList;
