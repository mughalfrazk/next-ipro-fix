import { z } from "zod";

export const IssueSchema = z.object({
  id: z.string(),
  job_id: z.string(),
  brand_id: z.number(),
  name: z.string(),
  model: z.string(),
  quantity: z.number(),
  charges: z.number(),
  total: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish(),
})

export const IssueListSchema = z.array(IssueSchema)

export type IssueModel = z.infer<typeof IssueSchema>
export type IssueListModel = z.infer<typeof IssueListSchema>