import { z } from "zod";
import { UserSchema } from "./user.model";
import { CustomerSchema } from "./customer.model";
import { InvoiceStatusSchema } from "./invoice-status.model";

export const CreateInvoiceItemsPayloadSchema = z.object({
  item_type: z.string().min(1, "Item type is required"),
  brand_name: z.string().optional(),
  brand_id: z.number().optional(),
  issue_model_name: z.string().optional(),
  issue_model_id: z.number().optional(),
  purchase_model_name: z.string().optional(),
  purchase_model_id: z.number().optional(),
  problem_name: z.string().optional(),
  problem_id: z.number().optional(),
  part_name: z.string().optional(),
  part_id: z.number().optional(),
  charges: z.number().optional(),
  quantity: z.number().min(1, "Item type is required"),
  total: z.number().min(1, "Item type is required")
});

export const CreateInvoicePayloadSchema = z.object({
  job_id: z.string().min(1, "Job id is required"),
  customer_id: z.string().min(1, "Customer id is required"),
  technician_id: z.string().min(1, "Technician id is required"),
  issue_total: z.number().min(1, "Issue total is required"),
  purchase_total: z.number().min(1, "Purchase total is required"),
  total: z.number().min(1, "Total is required"),
  invoice_items: z.array(CreateInvoiceItemsPayloadSchema)
});

const InvoiceIssueItemSchema = z.object({
  id: z.string().nullish(),
  item_type: z.string().nullish(),
  charges: z.number(),
  quantity: z.number(),
  total: z.number(),
  brand: z.object({
    id: z.number().nullish(),
    name: z.string().nullish()
  }),
  model: z.object({
    id: z.number().nullish(),
    name: z.string()
  }),
  problem: z.object({
    id: z.number().nullish(),
    name: z.string()
  })
});

const InvoicePurchaseItemSchema = z.object({
  id: z.string().nullish(),
  item_type: z.string().nullish(),
  quantity: z.number(),
  total: z.number(),
  model: z.object({
    id: z.number().nullish(),
    name: z.string()
  }),
  part: z.object({
    id: z.number().nullish(),
    name: z.string()
  })
});

export const InvoiceSchema = z.object({
  id: z.string(),
  issue_total: z.number(),
  purchase_total: z.number(),
  total: z.number(),
  barcode: z.string().nullish(),
  created_at: z.string().nullish(),
  updated_at: z.string().nullish(),
  deleted_at: z.string().nullish(),
  technician: UserSchema.nullish(),
  invoice_status: InvoiceStatusSchema.nullish(),
  created_by: UserSchema.nullish(),
  customer: CustomerSchema,
  issues: z.array(InvoiceIssueItemSchema),
  purchases: z.array(InvoicePurchaseItemSchema).nullish()
});

export const InvoiceRowSchema = z.object({
  id: z.string(),
  total: z.number(),
  created_at: z.string(),
  customer: CustomerSchema,
  invoice_status: InvoiceStatusSchema,
  devices_qty: z.number(),
  purchase_total: z.number()
});

export const InvoiceTableListSchema = z.array(InvoiceRowSchema);
export const InvoiceStatsSchema = z.object({
  total_invoices: z.number(),
  total_amount: z.number(),
  total_pending: z.number(),
  total_paid: z.number()
});

export const InvoiceTableSchema = z.object({ invoices: InvoiceTableListSchema });
export const InvoiceTableWithStatsSchema = z.object({
  invoices: InvoiceTableListSchema,
  stats: InvoiceStatsSchema
});

export type InvoiceModel = z.infer<typeof InvoiceSchema>;
export type InvoiceIssueItemModel = z.infer<typeof InvoiceIssueItemSchema>;
export type InvoicePurchaseItemModel = z.infer<typeof InvoicePurchaseItemSchema>;

export type InvoiceTableListModel = z.infer<typeof InvoiceTableListSchema>;
export type InvoiceStatsModel = z.infer<typeof InvoiceStatsSchema>;
export type InvoiceRowModel = z.infer<typeof InvoiceRowSchema>;
export type InvoiceTableModel = z.infer<typeof InvoiceTableSchema>;
export type InvoiceTableWithStatsModel = z.infer<typeof InvoiceTableWithStatsSchema>;

export type CreateInvoiceItemsPayloadModel = z.infer<typeof CreateInvoiceItemsPayloadSchema>;
export type CreateInvoicePayloadModel = z.infer<typeof CreateInvoicePayloadSchema>;
