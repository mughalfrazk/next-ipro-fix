import { z } from "zod";

export const ProblemSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullish(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish()
});

export const CreateProblemPayloadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().nullish()
});

export const UpdateProblemPayloadSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  description: z.string().nullish()
});

export const ProblemListSchema = z.array(ProblemSchema);

export type ProblemModel = z.infer<typeof ProblemSchema>;
export type ProblemListModel = z.infer<typeof ProblemListSchema>;
export type CreateProblemPayloadModal = z.infer<typeof CreateProblemPayloadSchema>;
export type UpdateProblemPayloadModal = z.infer<typeof UpdateProblemPayloadSchema>;
