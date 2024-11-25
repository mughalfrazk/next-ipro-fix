import { z } from "zod";

export const PartSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullish(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish()
});

export const PartListSchema = z.array(PartSchema)

export type PartModel = z.infer<typeof PartSchema>
export type PartListModel = z.infer<typeof PartListSchema>