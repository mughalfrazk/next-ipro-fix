import { z } from "zod";

export const ExpenseTypeSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullish(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish()
});

export const ExpenseTypeListSchema = z.array(ExpenseTypeSchema);

export type ExpenseTypeModel = z.infer<typeof ExpenseTypeSchema>;
export type ExpenseTypeListModel = z.infer<typeof ExpenseTypeListSchema>;
