"use server";

import { redirect } from "next/navigation";

import {
  CreatePurchasesModel,
  CreatePurchasesSchema,
  PurchaseModel
} from "../models/purchase.model";
import { ActionResult } from "@/utils/action-results";
import { getNestedInputValues } from "@/utils/form-data";
import { getFormattedError, getValidationError } from "@/utils/format-error";
import { isRedirectError } from "next/dist/client/components/redirect";
import { createJobPurchasesApi } from "../services/api/purchase.service";

const createJobPurchaseAction = async (_: ActionResult, formData: FormData) => {
  const structuredInput = getNestedInputValues(formData);

  let payload: CreatePurchasesModel = {
    job_id: formData.get("job_id") as string,
    purchases: (structuredInput.purchases ?? []).map((item: PurchaseModel) => ({
      ...item,
      id: item.id,
      model_id: +item.model_id,
      part_id: +item.part_id,
      quantity: +item.quantity,
      charges: +item.charges,
      total: +item.total
    }))
  };

  payload = { ...payload, purchases: payload.purchases.filter((item) => item?.id === "new") };

  const validatedPayload = await CreatePurchasesSchema.safeParseAsync(payload);
  if (!validatedPayload.success) {
    return getValidationError(validatedPayload?.error);
  }

  try {
    await createJobPurchasesApi(payload);
    redirect(`/dashboard/job/${payload.job_id}?tab=purchases`);
    return {};
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

export { createJobPurchaseAction };
