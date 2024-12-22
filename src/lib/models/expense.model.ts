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

export const ExpenseListSchema = z.array(ExpenseSchema);

export type ExpenseModel = z.infer<typeof ExpenseSchema>;
export type ExpenseListModel = z.infer<typeof ExpenseListSchema>;
