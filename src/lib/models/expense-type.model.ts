import { z } from "zod";

export const ExpenseTypeSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "Name is required"),
  description: z.string().nullish(),
  created_at: z.string().nullish(),
  updated_at: z.string().nullish(),
  deleted_at: z.string().nullish()
});

export const CreateExpenseTypePayloadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().nullish()
});

export const UpdateExpenseTypePayloadSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  description: z.string().nullish()
});

export const ExpenseTypeListSchema = z.array(ExpenseTypeSchema);

export type ExpenseTypeListModel = z.infer<typeof ExpenseTypeListSchema>;
export type ExpenseTypeModel = z.infer<typeof ExpenseTypeSchema>;
export type CreateExpenseTypePayloadModel = z.infer<typeof CreateExpenseTypePayloadSchema>;
export type UpdateExpenseTypePayloadModel = z.infer<typeof UpdateExpenseTypePayloadSchema>;
