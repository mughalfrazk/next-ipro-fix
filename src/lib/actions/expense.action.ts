"use server";

import { ActionResult } from "@/utils/action-results";
import { validatePayload } from "@/utils/validate-payload";
import { CreateExpensePayloadSchema } from "../models/expense.model";
import { getFormattedError } from "@/utils/format-error";
import { createExpenseApi } from "../services/api/expense.service";
import { isRedirectError } from "next/dist/client/components/redirect";
import { CreateExpensePayloadModel } from "../models/expense.model";

const createExpenseAction = async (_: ActionResult, formData: FormData) => {
  const payload: CreateExpensePayloadModel = {
    amount: +(formData.get("amount") as string),
    comments: formData.get("comments") as string | null,
    expense_type_id: +(formData.get("expense_type_id") as string)
  };
  const validatedPayload = await CreateExpensePayloadSchema.safeParseAsync(payload);
  if (!validatedPayload?.success) {
    return getFormattedError(validatedPayload?.error);
  }
  try {
    await createExpenseApi(payload);
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
    await createExpenseApi(parsed.data);
    return { success: "Created Successfully" };
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

export { createExpenseAction, updateExpenseAction };
