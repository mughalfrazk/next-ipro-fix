"use server";

import { ActionResult } from "@/utils/action-results";
import { validatePayload } from "@/utils/validate-payload";
import { CreatePartPayloadSchema, UpdatePartPayloadSchema } from "../models/part.model";
import { getFormattedError } from "@/utils/format-error";
import { createPartApi, updatePartApi } from "../services/api/part.service";
import { isRedirectError } from "next/dist/client/components/redirect";

const createPartAction = async (_: ActionResult, formData: FormData) => {
  const { parsed } = await validatePayload(formData, CreatePartPayloadSchema);
  if (!parsed?.success) {
    return getFormattedError(parsed?.error);
  }
  try {
    await createPartApi(parsed.data);
    return { success: "Created Successfully" };
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

const updatePartAction = async (_: ActionResult, formData: FormData) => {
  const { parsed } = await validatePayload(formData, UpdatePartPayloadSchema);
  if (!parsed?.success) {
    return getFormattedError(parsed?.error);
  }

  try {
    await updatePartApi(parsed.data.id, parsed.data);
    return { success: "Updated successfully!" };
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

export { createPartAction, updatePartAction };
