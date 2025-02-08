import { z } from "zod";
import { ExpenseTypeSchema } from "./expense-type.model";
import { UserSchema } from "./user.model";
import { PurchaseSchema } from "./purchase.model";

export const ExpenseSchema = z.object({
  id: z.string(),
  comments: z.string(),
  amount: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish(),
  expense_type: ExpenseTypeSchema,
  created_by: UserSchema,
  purchase: PurchaseSchema.nullish()
});

export const CreateExpensePayloadSchema = z.object({
  amount: z.string().min(2, "Amount should be more than 10"),
  comments: z.string().nullish(),
  expense_type_id: z.string().min(1, "Expense type is required")
});

export const ExpenseListSchema = z.array(ExpenseSchema);

export type ExpenseModel = z.infer<typeof ExpenseSchema>;
export type ExpenseListModel = z.infer<typeof ExpenseListSchema>;
export type CreateExpensePayloadModel = z.infer<typeof CreateExpensePayloadSchema>;
