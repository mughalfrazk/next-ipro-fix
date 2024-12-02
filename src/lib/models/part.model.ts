import { z } from "zod";

export const PartSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullish(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish()
});

export const CreatePartPayloadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().nullish()
});

export const UpdatePartPayloadSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required "),
  description: z.string().nullish()
});

export const PartListSchema = z.array(PartSchema);

export type PartModel = z.infer<typeof PartSchema>;
export type PartListModel = z.infer<typeof PartListSchema>;
export type CreatePartPayloadModel = z.infer<typeof CreatePartPayloadSchema>;
export type UpdatePartPayloadModel = z.infer<typeof UpdatePartPayloadSchema>;
