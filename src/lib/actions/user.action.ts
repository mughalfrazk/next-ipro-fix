"use server";

import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

import { ActionResult } from "@/utils/action-results";
import { validatePayload } from "@/utils/validate-payload";
import { getFormattedError, getValidationError } from "@/utils/format-error";
import { createUserApi, updateUserApi } from "@/lib/services/api/user.service";
import { RegisterFormSchema, RegisterFormWithSpecialitySchema } from "@/lib/models/auth.model";
import { UpdateUserPayloadSchema, UpdateUserTechPayloadSchema } from "../models/user.model";

const createUserAction = async (_: ActionResult, formData: FormData) => {
  const isTechnicianSelected = !!Number(formData.get("isTechnicianSelected"));

  const validationSchema = isTechnicianSelected
    ? RegisterFormWithSpecialitySchema
    : RegisterFormSchema;
  const { parsed, data } = await validatePayload(formData, validationSchema);

  if (!parsed?.success) {
    return getValidationError(parsed?.error);
  }

  try {
    await createUserApi(data);
    redirect("/dashboard/user");
    return {};
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

const updateUserAction = async (_: ActionResult, formData: FormData) => {
  const isTechnicianSelected = !!Number(formData.get("isTechnicianSelected"));

  const validationSchema = isTechnicianSelected
    ? UpdateUserTechPayloadSchema
    : UpdateUserPayloadSchema;
  const { parsed } = await validatePayload(formData, validationSchema);

  if (!parsed?.success) {
    return getValidationError(parsed?.error);
  }

  const payload = { ...parsed.data };
  if (isTechnicianSelected) {
    if (parsed.data.progress) payload["progress"] = Number(parsed.data.progress);
    if (parsed.data.target) payload["target"] = Number(parsed.data.target);
  }

  try {
    await updateUserApi(parsed.data?.id, payload);
    return { success: "Updated successfully" };
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

export { createUserAction, updateUserAction };
