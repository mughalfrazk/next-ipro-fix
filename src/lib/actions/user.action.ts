import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

import { ActionResult } from "@/utils/action-results";
import { validatePayload } from "@/utils/validate-payload";
import { getFormattedError } from "@/utils/format-error";
import { createUserApi } from "@/lib/services/api/user.service";
import { showErrorNotification } from "@/utils/functions";
import { RegisterFormSchema, RegisterFormWithSpecialitySchema } from "@/lib/models/auth.model";

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

export { createUserAction };
