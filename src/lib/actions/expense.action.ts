"use server";

import { ActionResult } from "@/utils/action-results";
import { getFormattedError } from "@/utils/format-error";
import { validatePayload } from "@/utils/validate-payload";
import { createExpenseApi } from "../services/api/expense.service";
import { CreateExpensePayloadSchema } from "../models/expense.model";
import { isRedirectError } from "next/dist/client/components/redirect";

const createExpenseAction = async (_: ActionResult, formData: FormData) => {
  const { parsed, data } = await validatePayload(formData, CreateExpensePayloadSchema);
  if (!parsed?.success) {
    return getFormattedError(parsed?.error);
  }

  try {
    await createExpenseApi(data);
    return { success: "Created Successfully" };
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};
const updateExpenseAction = async (_: ActionResult, formData: FormData) => {
  const { parsed } = await validatePayload(formData, CreateExpensePayloadSchema);
  if (!parsed?.success) {
    return getFormattedError(parsed?.error);
  }
  try {
    // await createExpenseApi(parsed.data);
    return { success: "Created Successfully" };
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

export { createExpenseAction, updateExpenseAction };
