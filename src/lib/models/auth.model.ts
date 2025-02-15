import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z.string({ required_error: "Password is required" }).min(1, "Password is required")
});

export const LoginResponseSchema = z.object({
  id: z.string(),
  email: z.string(),
  access_token: z.string()
});

export const RegisterFormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
  phone: z.string().min(1, "Phone is required"),
  address: z.string().min(1, "Address is required"),
  role_id: z.string().min(1, "Technician is required")
});

export const RegisterFormWithSpecialitySchema = RegisterFormSchema.extend({
  speciality_id: z.string().min(1, "Speciality is required"),
  target: z.string().min(2, "Target should be more than 10")
});

export type LoginFormModel = z.infer<typeof LoginFormSchema>;
export type LoginResponseModel = z.infer<typeof LoginResponseSchema>;
export type RegisterFormModel = z.infer<typeof RegisterFormSchema>;
export type RegisterFormWithSpecialityModel = z.infer<typeof RegisterFormWithSpecialitySchema>;
