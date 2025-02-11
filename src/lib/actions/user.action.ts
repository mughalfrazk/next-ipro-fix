import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

import { ActionResult } from "@/utils/action-results";
import { validatePayload } from "@/utils/validate-payload";
import { getFormattedError } from "@/utils/format-error";
import { createUserApi, updateUserApi } from "@/lib/services/api/user.service";
import { showErrorNotification, showNotification } from "@/utils/functions";
import { RegisterFormSchema, RegisterFormWithSpecialitySchema } from "@/lib/models/auth.model";
import { UpdateUserPayloadSchema, UpdateUserTechPayloadSchema } from "../models/user.model";

const createUserAction = async (_: ActionResult, formData: FormData) => {
  const isTechnicianSelected = !!Number(formData.get("isTechnicianSelected"));

  const validationSchema = isTechnicianSelected
    ? RegisterFormWithSpecialitySchema
    : RegisterFormSchema;
  const { parsed, data } = await validatePayload(formData, validationSchema);

  if (!parsed?.success) {
    showErrorNotification("Validation errors");
    return getFormattedError(parsed?.error);
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
  const { parsed, data } = await validatePayload(formData, validationSchema);

  if (!parsed?.success) {
    showErrorNotification("Validation errors");
    console.log(parsed?.error)
    return getFormattedError(parsed?.error);
  }

  try {
    await updateUserApi(parsed.data?.id, isTechnicianSelected ? { ...parsed.data, progress: Number(parsed.data.progress), target: Number(parsed.data.target) } : parsed.data);
    showNotification("Updated successfully")
    return {};
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error;
    console.log(error)
    return getFormattedError(error);
  }
};

export { createUserAction, updateUserAction };
