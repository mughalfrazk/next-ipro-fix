import { z } from "zod";
import { PurchaseListSchema } from "./purchase.model";

export const SupplierSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish()
});

export const SupplierWithPurchasesSchema = SupplierSchema.extend({
  purchases: PurchaseListSchema
});

export const CreateSupplierPayloadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().nullish()
});
export const UpdateSupplierPayloadSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  description: z.string().nullish()
});
export const SupplierListWithPurchasesSchema = z.array(SupplierWithPurchasesSchema);

export const SupplierListSchema = z.array(SupplierSchema);

export type SupplierModel = z.infer<typeof SupplierSchema>;
export type SupplierListModel = z.infer<typeof SupplierListSchema>;
export type SupplierWithPurchasesModel = z.infer<typeof SupplierWithPurchasesSchema>;
export type SupplierListWithPurchasesModel = z.infer<typeof SupplierListWithPurchasesSchema>;
export type CreateSupplierPayloadModel = z.infer<typeof CreateSupplierPayloadSchema>;
export type UpdateSupplierPayloadModel = z.infer<typeof UpdateSupplierPayloadSchema>;
