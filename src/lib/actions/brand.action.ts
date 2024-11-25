"use server";

import { isRedirectError } from "next/dist/client/components/redirect";
import { CreateBrandPayloadSchema, UpdateBrandPayloadSchema } from "../models/brand.model";
import { createBrandApi, updateBrandApi } from "../services/api/brand.service";
import { validatePayload } from "@/utils/validate-payload";
import { getFormattedError } from "@/utils/format-error";
import { ActionResult } from "@/utils/action-results";

const createBrandAction = async (_: ActionResult, formData: FormData) => {
  const { parsed } = await validatePayload(formData, CreateBrandPayloadSchema);
  if (!parsed?.success) {
    console.log(getFormattedError(parsed?.error));
    return getFormattedError(parsed?.error);
  }

  try {
    await createBrandApi(parsed.data);
    return { success: "Created successfully!" };
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

const updateBrandAction = async (_: ActionResult, formData: FormData) => {
  const { parsed } = await validatePayload(formData, UpdateBrandPayloadSchema);
  if (!parsed?.success) {
    return getFormattedError(parsed?.error);
  }

  try {
    await updateBrandApi(parsed.data.id, parsed.data);
    return { success: "Updated successfully!" };
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

export { createBrandAction, updateBrandAction };
