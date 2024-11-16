import { z } from "zod";

export const ModelSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish()
});

export const ModelListSchema = z.array(ModelSchema);

export type ModelModel = z.infer<typeof ModelSchema>;
export type ModelListModel = z.infer<typeof ModelListSchema>;
