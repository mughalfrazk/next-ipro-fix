import { z } from "zod"

export const ProblemTypeSchema = z.object({
  id: z.string(),
  name: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish(),
})

export const ProblemTypeListSchema = z.array(ProblemTypeSchema)

export type ProblemTypeModel = z.infer<typeof ProblemTypeSchema>
export type ProblemTypeListModel = z.infer<typeof ProblemTypeListSchema>
