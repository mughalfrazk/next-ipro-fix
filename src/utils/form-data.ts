/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
type NestedFormData = Record<string, any[]>;

/**
 * Parses flat FormData keys shaped like `field[index][prop]`
 * (e.g. `issues[0][problem_id]`) into `{ field: [{ prop: value }, ...] }`.
 * Keys that don't match this shape are ignored — read those flat fields
 * directly via `formData.get()`.
 *
 * This module is intentionally free of any client-only (Mantine) imports so it
 * is safe to use from server actions.
 */
export const getNestedInputValues = (formData: FormData): NestedFormData => {
  const nestedListRegex = /^([^[]+)\[(\d+)\]\[([^\]]+)\]$/;
  const result: NestedFormData = {};

  for (const [key, value] of Object.entries(Object.fromEntries(formData.entries()))) {
    const match = key.match(nestedListRegex);
    if (!match) continue;

    const [, field, indexStr, prop] = match;
    const index = Number(indexStr);

    if (!result[field]) result[field] = [];
    if (!result[field][index]) result[field][index] = {};
    result[field][index][prop] = value;
  }

  return result;
};
