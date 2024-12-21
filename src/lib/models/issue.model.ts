import { z } from "zod";
import { BrandSchema } from "./brand.model";
import { ProblemSchema } from "./problem.model";
import { ModelSchema } from "./model.model";

export const IssueSchema = z.object({
  id: z.string(),
  job_id: z.string(),
  brand_id: z.number(),
  problem_id: z.number(),
  model_id: z.number(),
  brand: BrandSchema.nullish(),
  problem: ProblemSchema.nullish(),
  model: ModelSchema.nullish(),
  quantity: z.number(),
  charges: z.number(),
  total: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish()
});

export const IssueListSchema = z.array(IssueSchema);

export type IssueModel = z.infer<typeof IssueSchema>;
export type IssueListModel = z.infer<typeof IssueListSchema>;
