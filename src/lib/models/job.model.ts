import { z } from "zod";
import { CustomerSchema } from "./customer.model";
import { UserSchema } from "./user.model";
import { JobStatusSchema } from "./job-status.model";
import { IssueListSchema } from "./issue.model";
import { PurchaseListSchema } from "./purchase.model";
import { ProblemTypeSchema } from "./problem-type.model";

export const CreateJobFormSchema = z.record(z.string(), z.string());

export const CreateJobPayloadSchema = z.object({
  problem_type_id: z.string({ message: "Problem Type is required" }).min(1, "Problem Type is required"),
  technician_id: z.string({ message: "Problem Type is required" }),
  issues: z
    .object({
      problem_id: z.number({ message: "Issue name is required" }).min(1, "Issue name is required"),
      model_id: z.number({ message: "Issue model is required" }).min(1, "Issue model is required"),
      quantity: z.number({ message: "Issue quantity is required" }).min(1, "Issue quantity is required"),
      charges: z.number({ message: "Issue charges is required" }).min(1, "Issue charges is required"),
      total: z.number({ message: "Issue total is required" }).min(1, "Issue total is required"),
      brand_id: z.number({ message: "Issue brand is required" }).min(1, "Issue brand is required")
    })
    .array(),
  customer_id: z.string({ message: "Customer info is required" }).min(1, "Customer info is required"),
  customer: z.object({
    name: z.string({ message: "Customer name is required" }).min(1, "Customer name is required"),
    phone: z.string({ message: "Customer phone is required" }).min(1, "Customer phone is required"),
    company_name: z.string()
  })
});

export const JobSchema = z.object({
  id: z.string(),
  customer: CustomerSchema,
  technician: UserSchema.nullish(),
  job_status: JobStatusSchema,
  issues: IssueListSchema,
  purchases: PurchaseListSchema.nullish(),
  problem_type: ProblemTypeSchema
});

export const JobListSchema = z.array(JobSchema);

export type CreateJobPayloadModel = z.infer<typeof CreateJobPayloadSchema>;
export type JobModel = z.infer<typeof JobSchema>;
export type JobListModel = z.infer<typeof JobListSchema>;
