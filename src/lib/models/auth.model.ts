import { z } from 'zod'

export const LoginFormSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password is required'),
})

export const LoginResponseSchema = z.object({
  id: z.string(),
  email: z.string(),
  access_token: z.string(),
})

export type LoginResponseModel = z.infer<typeof LoginResponseSchema>
export type LoginFormModel = z.infer<typeof LoginFormSchema>
