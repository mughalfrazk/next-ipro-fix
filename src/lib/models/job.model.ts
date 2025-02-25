import { z } from "zod";
import { CustomerSchema } from "./customer.model";
import { UserWithRoleSchema } from "./user.model";
import { JobStatusSchema } from "./job-status.model";
import { IssueListSchema } from "./issue.model";
import { PurchaseListSchema } from "./purchase.model";
import { ProblemTypeSchema } from "./problem-type.model";
import { CommentListSchema } from "./comment.model";

export const CreateJobFormSchema = z.record(z.string(), z.string());

export const CreateJobPayloadSchema = z.object({
  problem_type_id: z
    .string({ message: "Problem Type is required" })
    .min(1, "Problem Type is required"),
  technician_id: z.string({ message: "Technician is required" }).nullish(),
  issues: z
    .object({
      problem_id: z.number({ message: "Issue name is required" }).min(1, "Issue name is required"),
      model_id: z.number({ message: "Issue model is required" }).min(1, "Issue model is required"),
      quantity: z
        .number({ message: "Issue quantity is required" })
        .min(1, "Issue quantity is required"),
      charges: z
        .number({ message: "Issue charges is required" })
        .min(1, "Issue charges is required"),
      total: z.number({ message: "Issue total is required" }).min(1, "Issue total is required"),
      brand_id: z.number({ message: "Issue brand is required" }).min(1, "Issue brand is required")
    })
    .array(),
  customer_id: z
    .string({ message: "Customer info is required" })
    .min(1, "Customer info is required"),
  customer: z.object({
    name: z.string({ message: "Customer name is required" }).min(1, "Customer name is required"),
    phone: z.string({ message: "Customer phone is required" }).min(1, "Customer phone is required"),
    company_name: z.string()
  })
});

export const UpdateJobPayloadSchema = z.object({
  id: z.string({ message: "Job id is required" }).nullish(),
  problem_type_id: z
    .string({ message: "Problem Type is required" })
    .min(1, "Problem Type is required"),
  job_status_id: z.number().min(1, "Job Status is required"),
  technician_id: z.string({ message: "Problem Type is required" }),
  staff_id: z.string({ message: "Problem Type is required" }),
  issues: z
    .object({
      problem_id: z.number({ message: "Issue name is required" }).min(1, "Issue name is required"),
      model_id: z.number({ message: "Issue model is required" }).min(1, "Issue model is required"),
      quantity: z
        .number({ message: "Issue quantity is required" })
        .min(1, "Issue quantity is required"),
      charges: z
        .number({ message: "Issue charges is required" })
        .min(1, "Issue charges is required"),
      total: z.number({ message: "Issue total is required" }).min(1, "Issue total is required"),
      brand_id: z.number({ message: "Issue brand is required" }).min(1, "Issue brand is required")
    })
    .array(),
  customer_id: z
    .string({ message: "Customer info is required" })
    .min(1, "Customer info is required"),
  customer: z.object({
    name: z.string({ message: "Customer name is required" }).min(1, "Customer name is required"),
    phone: z.string({ message: "Customer phone is required" }).min(1, "Customer phone is required"),
    company_name: z.string()
  })
});

export const UpdateJobOptionalPayloadSchema = z.object({
  id: z.string({ message: "Job id is required" }).nullish(),
  problem_type_id: z
    .string({ message: "Problem Type is required" })
    .min(1, "Problem Type is required")
    .nullish(),
  job_status_id: z.number().min(1, "Job Status is required").nullish(),
  technician_id: z.string({ message: "Problem Type is required" }).nullish(),
  staff_id: z.string({ message: "Problem Type is required" }).nullish()
});

export const JobSchema = z.object({
  id: z.string(),
  customer: CustomerSchema,
  technician: UserWithRoleSchema.nullish(),
  staff: UserWithRoleSchema.nullish(),
  job_status: JobStatusSchema,
  issues: IssueListSchema,
  purchases: PurchaseListSchema.nullish(),
  problem_type: ProblemTypeSchema,
  comments: CommentListSchema.nullish(),
  barcode: z.string(),
  created_at: z.string(),
  updated_at: z.string().nullish()
});

export const JobListSchema = z.array(JobSchema);

export type CreateJobPayloadModel = z.infer<typeof CreateJobPayloadSchema>;
export type UpdateJobPayloadModel = z.infer<typeof UpdateJobPayloadSchema>;
export type UpdateJobOptionalPayloadModal = z.infer<typeof UpdateJobOptionalPayloadSchema>;
export type JobModel = z.infer<typeof JobSchema>;
export type JobListModel = z.infer<typeof JobListSchema>;
