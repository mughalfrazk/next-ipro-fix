import { getAuthApiClient } from "@/utils/api-client";
import { CreatePurchasesModel, PurchaseListSchema } from "@/lib/models/purchase.model";
import { parseFactory } from "@/utils/parse-factory";

const PurchaseListDataParser = parseFactory(PurchaseListSchema, "PurchaseListDataParser")

const getPurchasesByJobId = async (job_id: string) => {
  const result = await getAuthApiClient().get(`purchase?job_id=${job_id}`)
  return PurchaseListDataParser(result)
}

const createJobPurchasesApi = async (payload: CreatePurchasesModel) => {
  const result = await getAuthApiClient().post("purchase", payload)
  return result
}

export { createJobPurchasesApi, getPurchasesByJobId }