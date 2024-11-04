import { ActionResult } from "@/utils/action-results";
import { validatePayload } from "@/utils/validate-payload";
import { RegisterFormSchema, RegisterFormWithSpecialityModel, RegisterFormWithSpecialitySchema } from "../models/auth.model";
import { getFormattedError } from "@/utils/format-error";
import { createUserApi } from "@/lib/services/api/user.service";
import { isRedirectError } from "next/dist/client/components/redirect";

const createUserAction = async (_: ActionResult, formData: FormData) => {
  const isTechnicianSelected = !!Number(formData.get("isTechnicianSelected"))

  const validationSchema = isTechnicianSelected ? RegisterFormWithSpecialitySchema : RegisterFormSchema
  const { parsed, data } = await validatePayload(formData, validationSchema)

  if (!parsed?.success) {
    return getFormattedError(parsed?.error)
  }

  try {
    await createUserApi(data)
    return {}
  } catch (error) {
    // `redirectTo` won't work without this line 
    if (isRedirectError(error)) throw error
    return getFormattedError(error)
  }
}

export { createUserAction }