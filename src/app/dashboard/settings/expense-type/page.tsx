import ExpenseTypeList from "@/components/settings/expense-type/ExpenseTypeList";
import { getExpenseTypeApi } from "@/lib/services/api/expense-type.service";
const ExpensesTypePage = async () => {
  const result = await getExpenseTypeApi();
  return <ExpenseTypeList expenseTypes={result} />;
};

export default ExpensesTypePage;
