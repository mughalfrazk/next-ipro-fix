import { InvoiceStatusListSchema } from "@/lib/models/invoice-status.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const InvoiceStatusListDataParser = parseFactory(
  InvoiceStatusListSchema,
  "InvoiceStatusListDataParser"
);

const getInvoiceStatusListApi = async () => {
  const result = await getAuthApiClient().get("invoice-status");
  return InvoiceStatusListDataParser(result.data);
};

export { getInvoiceStatusListApi };
