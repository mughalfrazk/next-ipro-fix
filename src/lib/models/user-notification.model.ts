import { z } from "zod";

const UserSchema = z.object({
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

export const ActionSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullish(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish()
})

export const NotificationSchema = z.object({
  id: z.number(),
  type: z.string(),
  type_id: z.string(),
  triggerer: UserSchema,
  action: ActionSchema,
  description: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish(),
})

export const UserNotificationSchema = z.object({
  id: z.number(),
  is_read: z.boolean(),
  notification: NotificationSchema,
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish()
});

export const UserNotificationListSchema = z.array(UserNotificationSchema);

export type UserNotificationModel = z.infer<typeof UserNotificationSchema>;
export type UserNotificationListModel = z.infer<typeof UserNotificationListSchema>;
