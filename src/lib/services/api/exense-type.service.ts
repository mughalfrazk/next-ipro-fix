import {
  ExpenseTypeListSchema,
  CreateExpenseTypePayloadModel,
  UpdateExpenseTypePayloadModel
} from "@/lib/models/expense-type.model";
import { getAuthApiClient } from "@/utils/api-client";
import { parseFactory } from "@/utils/parse-factory";

const ExpenseTypeListDataParser = parseFactory(ExpenseTypeListSchema, "ExpenseTypeListDataParser");

const getExpenseTypeApi = async () => {
  const result = await getAuthApiClient().get("expense-type");
  return ExpenseTypeListDataParser(result.data);
};

const createExspenseTypeApi = async (payload: CreateExpenseTypePayloadModel) => {
  const result = getAuthApiClient().post("expense-type", payload);
  return result;
};

const updateExpenseTypeApi = async (expenseId: number, payload: UpdateExpenseTypePayloadModel) => {
  const result = await getAuthApiClient().patch(`expense-type/${expenseId}`, payload);
  return result;
};

const deleteExpenseTypeApi = async (expenseId: number) => {
  const result = await getAuthApiClient().delete(`expense-type/${expenseId}`);
  return result;
};

export { getExpenseTypeApi, createExspenseTypeApi, updateExpenseTypeApi, deleteExpenseTypeApi };
