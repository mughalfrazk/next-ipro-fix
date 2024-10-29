import { z } from "zod";
import { CustomerSchema } from "./customer.model";
import { UserSchema } from "./user.model";
import { JobStatusSchema } from "./job-status.model";
import { IssueListSchema } from "./issue.model";

// export const CreateJobFormSchema = z.object({
//   customer_company_name: z.string(),
//   customer_name: z.string(),
//   customer_phone: z.string()
// })
export const CreateJobFormSchema = z.record(z.string(), z.string())



export const CreateJobPayloadSchema = z.object({
  customer_id: z.string().nullish(),
  technician_id: z.string(),
  problem_type_id: z.string(),
  issues: z.array(z.object({
    name: z.string(),
    model: z.string(),
    quantity: z.number(),
    charges: z.number(),
    total: z.number(),
    brand_id: z.number()
  })),
  customer: z.object({
    name: z.string(),
    phone: z.string(),
    company_name: z.string()
  }).nullish()
})

export const JobSchema = z.object({
  id: z.string(),
  customer: CustomerSchema,
  technician: UserSchema.nullish(),
  job_status: JobStatusSchema,
  issues: IssueListSchema
})


export const JobListSchema = z.array(JobSchema)

export type CreateJobPayloadModel = z.infer<typeof CreateJobPayloadSchema>
export type JobModel = z.infer<typeof JobSchema>
export type JobListModel = z.infer<typeof JobListSchema>