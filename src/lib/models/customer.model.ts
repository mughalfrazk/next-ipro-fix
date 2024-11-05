import { z } from "zod";

export const CustomerSchema = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string(),
  company_name: z.string().nullish(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish()
});

export const CustomerListSchema = z.array(CustomerSchema);

export type CustomerModel = z.infer<typeof CustomerSchema>;
export type CustomerListModel = z.infer<typeof CustomerListSchema>;
