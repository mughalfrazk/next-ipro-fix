import { CreateExpensePayloadModel, ExpenseListSchema } from "@/lib/models/expense.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const ExpenseListDataParser = parseFactory(ExpenseListSchema, "ExpenseListDataParser");

const getExpenseListApi = async () => {
  const result = await getAuthApiClient().get("expense");
  return ExpenseListDataParser(result.data);
};

const createExpenseApi = async (payload: Partial<CreateExpensePayloadModel>) => {
  const result = await getAuthApiClient().post("expense", {
    ...payload,
    amount: Number(payload.amount),
    expense_type_id: Number(payload.expense_type_id)
  });
  return result;
};

const deleteExpenseApi = async (expenseId: number) => {
  const result = await getAuthApiClient().delete(`expense/${expenseId}`);
  return result;
};
export { getExpenseListApi, createExpenseApi, deleteExpenseApi };
