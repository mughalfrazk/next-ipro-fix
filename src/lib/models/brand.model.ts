import { z } from "zod";

export const BrandSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullish(),
  created_at: z.string(),
  updated_at: z.string(),
  deleted_at: z.string().nullish()
});

export const CreateBrandPayloadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().nullish()
});

export const UpdateBrandPayloadSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  description: z.string().nullish()
});

export const BrandListSchema = z.array(BrandSchema);

export type BrandModel = z.infer<typeof BrandSchema>;
export type BrandListModel = z.infer<typeof BrandListSchema>;
export type CreateBrandPayloadModel = z.infer<typeof CreateBrandPayloadSchema>;
export type UpdateBrandPayloadModel = z.infer<typeof UpdateBrandPayloadSchema>;
