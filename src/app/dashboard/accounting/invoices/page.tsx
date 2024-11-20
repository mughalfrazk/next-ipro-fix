import InvoicesList from "@/components/accounting/invoices/InvoicesList";
import { Stack } from "@mantine/core";
import TopCards from "@/components/accounting/invoices/TopInvoicesCards";
const InvoicesPage = async () => {
  return (
    <Stack>
      <TopCards />
      <InvoicesList />
    </Stack>
  );
};
export default InvoicesPage;
