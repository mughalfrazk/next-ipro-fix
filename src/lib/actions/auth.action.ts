"use server";

import { signIn, signOut } from "@/auth";

import { LoginFormSchema } from "../models/auth.model";
import { ActionResult } from "@/utils/action-results";
import { getFormattedError } from "@/utils/format-error";
import { validatePayload } from "@/utils/validate-payload";
import { isRedirectError } from "next/dist/client/components/redirect";

const loginAction = async (_: ActionResult, formData: FormData) => {
  const { parsed } = await validatePayload(formData, LoginFormSchema)
  if (!parsed?.success) {
    return getFormattedError(parsed?.error)
  }

  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/dashboard"
    });

    return {}
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error
    return getFormattedError(error)
  }
};

const logoutAction = async () => {
  try {
    await signOut({ redirectTo: "/auth" })
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error
    return getFormattedError(error)
  }
}

export { loginAction, logoutAction }