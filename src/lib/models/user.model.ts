import { z } from "zod";
import { CompanySchema } from "./company.model";
import { RoleSchema } from "./role.model";

export const UserSchema = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
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

export type ProfileModel = z.infer<typeof ProfileSchema>
export type UserListModel = z.infer<typeof UserListSchema>