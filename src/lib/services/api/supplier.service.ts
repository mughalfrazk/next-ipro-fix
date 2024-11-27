import { SupplierListSchema } from "@/lib/models/supplier.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const SupplierListDataParser = parseFactory(SupplierListSchema, "SupplierListDataParser");

const getSupplierListApi = async () => {
  const result = await getAuthApiClient().get("supplier");
  return SupplierListDataParser(result.data);
};

export { getSupplierListApi };
