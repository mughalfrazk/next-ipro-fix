import ExpensesList from "@/components/accounting/expenses/ExpenseList";
import { getExpenseTypeApi } from "@/lib/services/api/exense-type.service";
const ExpensesPage = async () => {
  const result = await getExpenseTypeApi();
  return <ExpensesList expenses={result} />;
};

export default ExpensesPage;
