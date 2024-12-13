"use server";

import { ActionResult } from "@/utils/action-results";
import { validatePayload } from "@/utils/validate-payload";
import { CreateSupplierPayloadSchema, UpdateSupplierPayloadSchema } from "../models/supplier.model";
import { getFormattedError } from "@/utils/format-error";
import { isRedirectError } from "next/dist/client/components/redirect";
import { createSupplierApi } from "../services/api/supplier.service";

const createSupplierAction = async (_: ActionResult, formData: FormData) => {
  const { parsed } = await validatePayload(formData, CreateSupplierPayloadSchema);
  if (!parsed?.success) {
    return getFormattedError(parsed?.error);
  }
  try {
    await createSupplierApi(parsed.data);
    return { success: "Created Successfully" };
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

const updateSupplierAction = async (_: ActionResult, formData: FormData) => {
  const { parsed } = await validatePayload(formData, UpdateSupplierPayloadSchema);
  if (!parsed?.success) {
    return getFormattedError(parsed?.error);
  }
  try {
    await createSupplierApi(parsed.data);
    return { success: "Created Successfully" };
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

export { createSupplierAction, updateSupplierAction };
