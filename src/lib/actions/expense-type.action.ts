"use server";

import { ActionResult } from "@/utils/action-results";
import { validatePayload } from "@/utils/validate-payload";
import { getFormattedError } from "@/utils/format-error";
import { isRedirectError } from "next/dist/client/components/redirect";
import { createExspenseTypeApi, updateExpenseTypeApi } from "../services/api/exense-type.service";
import {
  CreateExpenseTypePayloadSchema,
  UpdateExpenseTypePayloadSchema
} from "../models/expense.model";

const createExpenseTypeAction = async (_: ActionResult, formData: FormData) => {
  console.log("this is form data", formData);
  const { parsed } = await validatePayload(formData, CreateExpenseTypePayloadSchema);
  if (!parsed?.success) {
    return getFormattedError(parsed?.error);
  }
  try {
    await createExspenseTypeApi(parsed.data);
    return { success: "Created Successfully" };
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.log("the create action is up and running", getFormattedError(error));
    return getFormattedError(error);
  }
};

const updateExpenseTypeAction = async (_: ActionResult, formData: FormData) => {
  const { parsed } = await validatePayload(formData, UpdateExpenseTypePayloadSchema);
  if (!parsed?.success) {
    return getFormattedError(parsed?.error);
  }

  try {
    await updateExpenseTypeApi(parsed.data.id, parsed.data);
    return { success: "Updated successfully!" };
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error;
    console.log("the update action is up and running", getFormattedError(error));
    return getFormattedError(error);
  }
};

export { createExpenseTypeAction, updateExpenseTypeAction };
