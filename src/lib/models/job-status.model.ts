import { z } from 'zod'

export const JobStatusSchema = z.object({
  id: z.number(),
  name: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish(),
})

export type JobStatusModel = z.infer<typeof JobStatusSchema>
