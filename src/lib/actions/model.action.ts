import { redirect, useRouter } from "next/navigation";

import { ActionResult } from "@/utils/action-results";
import { validatePayload } from "@/utils/validate-payload";
import { getFormattedError } from "@/utils/format-error";
import { CreateModelPayloadSchema, UpdateModelPayloadSchema } from "@/lib/models/model.model";
import { createModelApi, updateModelApi } from "../services/api/model.service";
import { isRedirectError } from "next/dist/client/components/redirect";

const createModelAction = async (_: ActionResult, formData: FormData) => {
  const { parsed } = await validatePayload(formData, CreateModelPayloadSchema);
  if (!parsed?.success) {
    return getFormattedError(parsed?.error);
  }

  console.log(parsed.data);
  try {
    await createModelApi(parsed.data);
    return {};
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error;
    console.log(error);
    return getFormattedError(error);
  }
};

const updateModelAction = async (_: ActionResult, formData: FormData) => {
  const { parsed } = await validatePayload(formData, UpdateModelPayloadSchema);
  if (!parsed?.success) {
    return getFormattedError(parsed?.error);
  }

  try {
    await updateModelApi(parsed.data.id, parsed.data);
    return {};
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error;
    console.log(error);
    return getFormattedError(error);
  }
};

export { createModelAction, updateModelAction };
