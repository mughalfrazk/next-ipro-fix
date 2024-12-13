import {
  CreateSupplierPayloadModal,
  SupplierListSchema,
  SupplierListWithPurchasesSchema
} from "@/lib/models/supplier.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const SupplierListDataParser = parseFactory(SupplierListSchema, "SupplierListDataParser");
const SupplierListWithPurchasesDataParser = parseFactory(
  SupplierListWithPurchasesSchema,
  "SupplierListWithPurchasesDataParser"
);

const getSupplierListApi = async () => {
  const result = await getAuthApiClient().get("supplier");
  return SupplierListDataParser(result.data);
};

const getSuppliersWithPurchasesApi = async () => {
  const result = await getAuthApiClient().get("supplier/purchases");
  return SupplierListWithPurchasesDataParser(result.data);
};

const createSupplierApi = async (payload: CreateSupplierPayloadModal) => {
  const result = await getAuthApiClient().post("supplier", payload);
  return result;
};

export { getSupplierListApi, getSuppliersWithPurchasesApi, createSupplierApi };
