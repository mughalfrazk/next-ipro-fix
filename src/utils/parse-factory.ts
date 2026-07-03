import { z } from "zod";

/**
 * Common zod parser for capturing and logging parse errors
 * https://github.com/colinhacks/zod/issues/105
 */
export const parseFactory =
  <T extends z.ZodTypeAny>(schema: T, name: string) =>
  (data: unknown): z.infer<T> => {
    try {
      return schema.parse(data);
    } catch (err) {
      console.error(`Failed to parse ${name}:`, err);
      throw err;
    }
  };
