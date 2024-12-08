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

export const CreateCustomerPayloadSchema = z.object({
  name: z.string().min(1, "name is required"),
  phone: z.string().nullish(),
  company_name: z.string().nullish()
});
export const UpdateCustomerPayloadSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "name is required"),
  phone: z.string().nullish(),
  company_name: z.string().nullish()
});

export const CustomerListSchema = z.array(CustomerSchema);

export type CustomerModel = z.infer<typeof CustomerSchema>;
export type CustomerListModel = z.infer<typeof CustomerListSchema>;
export type CreateCustomerPayloadModel = z.infer<typeof CreateCustomerPayloadSchema>;
export type UpdateCustomerPayloadModel = z.infer<typeof UpdateCustomerPayloadSchema>;
