import { z } from "zod";

export const RoleSchema = z.object({
  id: z.string(),
  name: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish()
})