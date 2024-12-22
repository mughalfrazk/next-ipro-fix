import { CreateInvoicePayloadModel, InvoiceSchema } from "@/lib/models/invoice.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const InvoiceDataParser = parseFactory(InvoiceSchema, "InvoiceDataParser")

const getInvoiceDetailByIdApi = async (job_id: string) => {
  const result = await getAuthApiClient().get(`invoice?job_id=${job_id}`);
  return result.data
  return InvoiceDataParser(result.data)
};

const generateInvoiceForJobApi = async (payload: CreateInvoicePayloadModel) => {
  const result = await getAuthApiClient().post("invoice", payload)
  return result.data
}

export { getInvoiceDetailByIdApi, generateInvoiceForJobApi };
