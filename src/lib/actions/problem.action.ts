"use server";

import { getFormattedError } from "@/utils/format-error";
import { validatePayload } from "@/utils/validate-payload";
import { CreateProblemPayloadSchema, UpdateProblemPayloadSchema } from "../models/problem.model";
import { ActionResult } from "@/utils/action-results";
import { isRedirectError } from "next/dist/client/components/redirect";
import { createProblemApi, updateProblemApi } from "../services/api/problem.service";

const createProblemAction = async (_: ActionResult, formData: FormData) => {
  const { parsed } = await validatePayload(formData, CreateProblemPayloadSchema);
  if (!parsed?.success) {
    return getFormattedError(parsed?.error);
  }

  try {
    await createProblemApi(parsed.data);
    return { success: "Created successfully!" };
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

const updateProblemAction = async (_: ActionResult, formData: FormData) => {
  const { parsed } = await validatePayload(formData, UpdateProblemPayloadSchema);
  if (!parsed?.success) {
    return getFormattedError(parsed?.error);
  }
  try {
    await updateProblemApi(parsed.data.id, parsed.data);
    return { success: "Updated successfully!" };
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

export { createProblemAction, updateProblemAction };
