import { z } from "zod";

export const GetProfitLossPayloadSchema = z.object({
  start_date: z.string().date(),
  end_date: z.string().date()
})

export const PorfitLossDataSchema = z.object({
  total_sales: z.number(),
  total_lost_sales: z.number(),
  total_expenses: z.object({
    purchases: z.number(),
    other: z.number()
  }),
  profit: z.object({
    amount: z.number(),
    margin: z.number(),
  }).nullish(),
  loss: z.object({
    amount: z.number(),
    margin: z.number(),
  }).nullish(),
  job_sale_by_type: z.array(z.object({ 
    name: z.string(),
    total_sales: z.number()
  })),
  expenses_by_type: z.array(z.object({
    name: z.string(),
    total_expenses: z.number()
  })),
})

export type GetProfitLossPayloadModel = z.infer<typeof GetProfitLossPayloadSchema>
export type PorfitLossDataModel = z.infer<typeof PorfitLossDataSchema>