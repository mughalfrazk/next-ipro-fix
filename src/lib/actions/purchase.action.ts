import { redirect } from "next/navigation";

import {
  CreatePurchasesModel,
  CreatePurchasesSchema,
  PurchaseModel
} from "../models/purchase.model";
import { ActionResult } from "@/utils/action-results";
import { getNestedInputValues, showErrorNotification, showNotification } from "@/utils/functions";
import { getFormattedError } from "@/utils/format-error";
import { isRedirectError } from "next/dist/client/components/redirect";
import { createJobPurchasesApi } from "../services/api/purchase.service";

const createJobPurchaseAction = async (_: ActionResult, formData: FormData) => {
  const structuredInput = getNestedInputValues(formData);

  const payload: CreatePurchasesModel = {
    job_id: formData.get("job_id") as string,
    purchases: structuredInput.purchases.map((item: PurchaseModel) => ({
      ...item,
      model_id: +item.model_id,
      part_id: +item.part_id,
      quantity: +item.quantity,
      charges: +item.charges,
      total: +item.total
    }))
  };

  const validatedPayload = await CreatePurchasesSchema.safeParseAsync(payload);
  if (!validatedPayload.success) {
    showErrorNotification("Validation errors");
    console.log(getFormattedError(validatedPayload?.error))
    return getFormattedError(validatedPayload?.error);
  }

  try {
    await createJobPurchasesApi(payload);
    redirect(`/dashboard/job/${payload.job_id}?tab=purchases`);
    showNotification("Updated successfully!");
    return {};
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

export { createJobPurchaseAction };
