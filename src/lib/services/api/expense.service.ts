import { ExpenseListSchema } from "@/lib/models/expense.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const ExpenseListDataParser = parseFactory(ExpenseListSchema, "ExpenseListDataParser");

const getExpenseListApi = async () => {
  const result = await getAuthApiClient().get("expense");
  return ExpenseListDataParser(result.data);
};

export { getExpenseListApi };
