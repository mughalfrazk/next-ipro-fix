"use server";

import { ActionResult } from "@/utils/action-results";
import { validatePayload } from "@/utils/validate-payload";
import { CreateCustomerPayloadSchema, UpdateCustomerPayloadSchema } from "../models/customer.model";
import { getFormattedError } from "@/utils/format-error";
import { isRedirectError } from "next/dist/client/components/redirect";
import { createCustomerApi } from "../services/api/customer.service";

const createCustomerAction = async (_: ActionResult, formData: FormData) => {
  const { parsed } = await validatePayload(formData, CreateCustomerPayloadSchema);
  if (!parsed?.success) {
    return getFormattedError(parsed?.error);
  }
  try {
    await createCustomerApi(parsed.data);
    return { success: "Created Successfully" };
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

const updateCustomerAction = async (_: ActionResult, formData: FormData) => {
  const { parsed } = await validatePayload(formData, UpdateCustomerPayloadSchema);
  if (!parsed?.success) {
    return getFormattedError(parsed?.error);
  }
  try {
    await createCustomerApi(parsed.data);
    return { success: "Created Successfully" };
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

export { createCustomerAction, updateCustomerAction };
