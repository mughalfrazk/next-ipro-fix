import { z } from "zod";

export const InvoiceStatusSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullish(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish()
});

export const InvoiceStatusListSchema = z.array(InvoiceStatusSchema);

export type InvoiceStatusModel = z.infer<typeof InvoiceStatusSchema>;
export type InvoiceStatusListModel = z.infer<typeof InvoiceStatusListSchema>;