import { z } from "zod"

export const PurchaseSchema = z.object({
  id: z.string(),
  job_id: z.string().min(1, "Valid job is required"),
  brand_id: z.number().min(1, "Valid brand is required"),
  quantity: z.number().min(1, "Quantity is required"),
  charges: z.number().min(1, "Charges is required"),
  model: z.string().min(1, "Model is required"),
  total: z.number().min(1, "Total is required"),
  parts: z.string().min(1, "Parts is required"),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish(),
})

export const PurchaseListSchema = z.array(PurchaseSchema)

export const CreatePurchasesSchema = z.object({
  job_id: z.string({ message: "Job is required" }).min(1, "Job is required"),
  purchases: z
    .object({
      brand_id: z.number().min(1, "Valid brand is required"),
      quantity: z.number().min(1, "Quantity is required"),
      charges: z.number().min(1, "Charges is required"),
      model: z.string().min(1, "Model is required"),
      total: z.number().min(1, "Total is required"),
      parts: z.string().min(1, "Parts is required"),
    })
    .array(),
})

export type CreatePurchasesModel = z.infer<typeof CreatePurchasesSchema>
export type PurchaseModel = z.infer<typeof PurchaseSchema>
export type PurchaseListModel = z.infer<typeof PurchaseListSchema>
