import {
  CreateInvoicePayloadModel,
  InvoiceSchema,
  InvoiceTableSchema,
  InvoiceTableWithStatsSchema
} from "@/lib/models/invoice.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const InvoiceDataParser = parseFactory(InvoiceSchema, "InvoiceDataParser");
const InvoiceTableWithStatsDataParser = parseFactory(InvoiceTableWithStatsSchema, "InvoiceTableWithStatsDataParser");

const getInvoiceDetailByIdApi = async (job_id: string) => {
  const result = await getAuthApiClient().get(`invoice?job_id=${job_id}`);
  return InvoiceDataParser(result.data);
};

const getInvoicesListApi = async () => {
  const result = await getAuthApiClient().get("invoice/all?stats=1");
  return InvoiceTableWithStatsDataParser(result.data);
};

const generateInvoiceForJobApi = async (payload: CreateInvoicePayloadModel) => {
  const result = await getAuthApiClient().post("invoice", payload);
  return result.data;
};

export { getInvoiceDetailByIdApi, getInvoicesListApi, generateInvoiceForJobApi };
