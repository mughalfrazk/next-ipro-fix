import { z } from "zod";

export const InvoiceItemSchema = z.object({
  id: z.string(),
  item_type: z.enum(["issue", "purchase"]),
  brand_name: z.string(),
  issue_model_name: z.string(),
  purchase_model_name: z.string(),
  problem_name: z.string(),
  part_name: z.string(),
  charges: z.number(),
  quantity: z.number(),
  total: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish()
});


export const InvoiceItemListSchema = z.array(InvoiceItemSchema);

export type InvoiceItemModel = z.infer<typeof InvoiceItemSchema>;
export type InvoiceItemListModel = z.infer<typeof InvoiceItemListSchema>;