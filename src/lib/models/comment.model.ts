import { z } from "zod";
import { ProfileSchema } from "./user.model";

export const CommentSchema = z.object({
  id: z.number(),
  comment: z.string(),
  job_id: z.string(),
  created_by_id: z.string(),
  created_by: ProfileSchema,
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish()
});

export const CommentListSchema = z.array(CommentSchema);

export const CreateCommentPayloadSchema = z.object({
  comment: z.string().min(1, "Comment is required"),
  job_id: z.string()
});

export type CommentModel = z.infer<typeof CommentSchema>;
export type CommentListModel = z.infer<typeof CommentListSchema>;
export type CreateCommentPayloadModel = z.infer<typeof CreateCommentPayloadSchema>;
