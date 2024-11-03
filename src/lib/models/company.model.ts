import { z } from 'zod'

export const CompanySchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string().nullish(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish(),
})
