import { ActionResult } from "@/utils/action-results";
import { validatePayload } from "@/utils/validate-payload";
import { RegisterFormSchema } from "../models/auth.model";
import { getFormattedError } from "@/utils/format-error";

const createUserAction = async (_: ActionResult, formData: FormData) => {
  const { parsed, data } = await validatePayload(formData, RegisterFormSchema)
  console.log(data)
  if (!parsed?.success) {
    console.log(parsed)
    return getFormattedError(parsed?.error)
  }

  return {}
}

export { createUserAction }