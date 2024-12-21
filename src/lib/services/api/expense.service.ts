import { ExpenseTypeListSchema } from "@/lib/models/expense-type.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const ExpenseListDataParser = parseFactory(ExpenseTypeListSchema, "ExpenseListDataParser");

const getExpenseListApi = async () => {
  const result = await getAuthApiClient().get("expense");
  return ExpenseListDataParser(result.data);
};

export { getExpenseListApi };
