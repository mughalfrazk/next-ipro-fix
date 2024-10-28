import { z } from "zod";
import { CompanySchema } from "./company.model";
import { RoleSchema } from "./role.model";

export const UserSchema = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  phone: z.string().nullish(),
  progress: z.number().nullish(),
  target: z.number().nullish(),
  is_active: z.boolean(),
  is_verified: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish(),
})




export const UserListSchema = z.array(UserSchema)

export const ProfileSchema = UserSchema.extend({
  role: RoleSchema,
  company: CompanySchema
})

export const ProfileListSchema = z.array(ProfileSchema)

export type ProfileModel = z.infer<typeof ProfileSchema>
export type UserModel = z.infer<typeof UserSchema>
export type ProfileListModel = z.infer<typeof ProfileListSchema>
export type UserListModel = z.infer<typeof UserListSchema>