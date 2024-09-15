"use server";

import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect";

const loginAction = async (formData: any) => {
  try {
    await signIn("credentials", { email: formData.get("email"), password: formData.get("password"), redirectTo: "/dashboard" });
  } catch (error) {
    if (isRedirectError(error)) throw error;
  }
};

const logoutAction = async () => {
  try {
    await signOut({ redirectTo: "/auth" })
  } catch (error) {
    console.log("Error caught...");
    console.log(error);
  }
}

export { loginAction, logoutAction }