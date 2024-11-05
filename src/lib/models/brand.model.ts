import { z } from "zod"

export const BrandSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish(),
})

export const BrandListSchema = z.array(BrandSchema)

export type BrandModel = z.infer<typeof BrandSchema>
export type BrandListModel = z.infer<typeof BrandListSchema>
