import { z } from "zod";
import { CompanySchema } from "./company.model";
import { RoleSchema } from "./role.model";
import { ProblemTypeSchema } from "./problem-type.model";
import { UserNotificationListSchema } from "./user-notification.model";

export const UserSchema = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  phone: z.string().nullish(),
  progress: z.number().nullish(),
  target: z.number().nullish(),
  address: z.string().nullish(),
  jobs: z.number().nullish(),
  is_active: z.boolean(),
  is_verified: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish()
});

export const UserListSchema = z.array(UserSchema);
export const UserWithRoleSchema = UserSchema.extend({
  role: RoleSchema
});

export const UserWithRoleListSchema = z.array(UserWithRoleSchema);

export const ProfileSchema = UserSchema.extend({
  role: RoleSchema,
  speciality: ProblemTypeSchema.nullish(),
  company: CompanySchema.nullish()
});

export const ProfileWithNotificationsSchema = ProfileSchema.extend({
  user_notifications: UserNotificationListSchema
})

export const ProfileListSchema = z.array(ProfileSchema);

export type UserByRoleType = {
  id: string;
  name: string;
  user: {
    id: string;
    first_name: string;
    last_name: string;
  }[];
}[];

export const UpdateUserPayloadSchema = z.object({
  id: z.string().min(1, "User Id is required"),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  phone: z.string().min(1, "Phone is required"),
  address: z.string().min(1, "Address is required")
});

export const UpdateUserTechPayloadSchema = UpdateUserPayloadSchema.extend({
  target: z.string().nullish(),
  progress: z.string()
});

export type ProfileModel = z.infer<typeof ProfileSchema>;
export type ProfileListModel = z.infer<typeof ProfileListSchema>;
export type ProfileWithNotificationsModel = z.infer<typeof ProfileWithNotificationsSchema>
export type UserModel = z.infer<typeof UserSchema>;
export type UserListModel = z.infer<typeof UserListSchema>;

export type UserWithRoleModel = z.infer<typeof UserWithRoleSchema>;
export type UpdateUserPayloadModel = z.infer<typeof UpdateUserPayloadSchema>;
export type UpdateUserTechPayloadModel = z.infer<typeof UpdateUserTechPayloadSchema>;
