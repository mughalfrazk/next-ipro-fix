import { CreateCustomerPayloadModel, CustomerListSchema } from "@/lib/models/customer.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const CustomerListDataParser = parseFactory(CustomerListSchema, "CustomerListDataParser");

const getCustomerListApi = async () => {
  const result = await getAuthApiClient().get("customer");
  return CustomerListDataParser(result.data);
};

const createCustomerApi = async (payload: CreateCustomerPayloadModel) => {
  const result = await getAuthApiClient().post("customer", payload);
  return result;
};
export { getCustomerListApi, createCustomerApi };
