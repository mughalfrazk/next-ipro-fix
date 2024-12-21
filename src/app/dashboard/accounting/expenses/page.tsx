import ExpensesList from "@/components/accounting/expenses/ExpenseList";
import { getExpenseListApi } from "@/lib/services/api/expense.service";

const ExpensesPage = async () => {
  const result = await getExpenseListApi();
  
  return <ExpensesList expenses={result} />;
};

export default ExpensesPage;
