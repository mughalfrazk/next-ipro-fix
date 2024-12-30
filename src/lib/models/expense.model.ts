import { z } from "zod";
import { ExpenseTypeSchema } from "./expense-type.model";
import { UserSchema } from "./user.model";

export const ExpenseSchema = z.object({
  id: z.string(),
  comments: z.string(),
  amount: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish(),
  expense_type: ExpenseTypeSchema,
  created_by: UserSchema
});

export const CreateExpensePayloadSchema = z.object({
  amount: z.string(),
  comments: z.string().nullish(),
  expense_type_id: z.string()
});

export const ExpenseListSchema = z.array(ExpenseSchema);

export type ExpenseModel = z.infer<typeof ExpenseSchema>;
export type ExpenseListModel = z.infer<typeof ExpenseListSchema>;
export type CreateExpensePayloadModel = z.infer<typeof CreateExpensePayloadSchema>;
