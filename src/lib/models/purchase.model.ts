import { z } from "zod";
import { PartSchema } from "./part.model";

export const PurchaseSchema = z.object({
  id: z.string(),
  supplier_id: z.string().min(1, "Valid brand is required"),
  job_id: z.string().min(1, "Valid job is required"),
  part_id: z.number().min(1, "Valid part is required"),
  quantity: z.number().min(1, "Quantity is required"),
  model_id: z.number().min(1, "Model is required"),
  total: z.number().min(1, "Total is required"),
  charges: z.number().nullish(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish(),
  part: PartSchema.nullish()
});

export const PurchaseListSchema = z.array(PurchaseSchema);

export const CreatePurchasesSchema = z.object({
  job_id: z.string({ message: "Job is required" }).min(1, "Job is required"),
  purchases: z
    .object({
      supplier_id: z.string().min(1, "Valid supplier is required"),
      part_id: z.number().min(1, "Parts is required"),
      model_id: z.number().min(1, "Model is required"),
      quantity: z.number().min(1, "Quantity is required"),
      total: z.number().min(1, "Total is required")
    })
    .array()
});

export type CreatePurchasesModel = z.infer<typeof CreatePurchasesSchema>;
export type PurchaseModel = z.infer<typeof PurchaseSchema>;
export type PurchaseListModel = z.infer<typeof PurchaseListSchema>;
