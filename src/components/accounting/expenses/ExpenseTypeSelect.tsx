import { FieldErrorPropsType } from "@/hooks/use-action-errors";
import { ExpenseModel } from "@/lib/models/expense.model";
import { getExpenseTypeApi } from "@/lib/services/api/expense-type.service";
import { ComboboxData, ComboboxItem, Grid, GridCol } from "@mantine/core";
import IproSelect from "@/components/core/IproSelect";
import { useState, useEffect } from "react";
import { capitalizeFirstLetter, showErrorNotification } from "@/utils/functions";
import { getFormattedError } from "@/utils/format-error";

type ExpenseTypeSelectProps = {
  expense?: ExpenseModel;
} & FieldErrorPropsType;

const ExpenseTypeSelect = ({ expense, getFieldErrorProps }: ExpenseTypeSelectProps) => {
  const [expenseTypeOptions, setExpenseTypeOptions] = useState<ComboboxData>([]);
  const [expenseTypeItem, setExpenseTypeItem] = useState<ComboboxItem>();

  const getExpenseTypeList = async () => {
    try {
      const result = await getExpenseTypeApi();
      setExpenseTypeOptions(
        result.map((item) => ({
          label: capitalizeFirstLetter(item.name),
          value: String(item.id)
        }))
      );
    } catch (error) {
      const e = getFormattedError(error);
      showErrorNotification(e.errors?.formErrors?.[0]);
    }
  };

  const onExpenseTypeChange = (value: string | number | null) => {
    const [selectedExpenseType] = expenseTypeOptions.filter(
      (item) => (item as unknown as ComboboxItem).value === value
    );
    if (value) setExpenseTypeItem(selectedExpenseType as ComboboxItem);
  };

  useEffect(() => {
    getExpenseTypeList();
  }, []);

  useEffect(() => {
    if (expense && expense.expense_type && expenseTypeOptions.length) {
      onExpenseTypeChange(expense.expense_type.id);
    }
  }, [expense, expenseTypeOptions]);

  return (
    <Grid>
      <GridCol>
        <IproSelect
          name="expense_type_id"
          label="Expense Type"
          data={expenseTypeOptions}
          value={expenseTypeItem?.value as string & string[]}
          onOptionSubmit={onExpenseTypeChange}
          {...getFieldErrorProps("expense_type_id")}
        />
      </GridCol>
    </Grid>
  );
};

export default ExpenseTypeSelect;
