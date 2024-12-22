import { Stack } from "@mantine/core";

import InvoicesList from "@/components/accounting/invoices/InvoicesList";
import TopCards from "@/components/accounting/invoices/TopInvoicesCards";
import { getInvoicesListApi } from "@/lib/services/api/invoice.service";

const InvoicesPage = async () => {
  const result = await getInvoicesListApi();

  return (
    <Stack>
      <TopCards stats={result.stats} />
      <InvoicesList invoices={result} />
    </Stack>
  );
};
export default InvoicesPage;
