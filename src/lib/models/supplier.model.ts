import { z } from "zod";

export const SupplierSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish()
});

export const SupplierListSchema = z.array(SupplierSchema)

export type SupplierModel = z.infer<typeof SupplierSchema>
export type SupplierListModel = z.infer<typeof SupplierListSchema>