import { ZodTypeAny } from "zod";

export const validatePayload = async (payload: FormData, schema?: ZodTypeAny) => {
  const data = Object.fromEntries(payload.entries());
  if (!schema) return { data };

  const parsed = await schema.safeParseAsync(data);
  return { data, parsed };
};
