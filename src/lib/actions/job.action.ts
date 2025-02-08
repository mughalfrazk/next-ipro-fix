import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

import {
  CreateJobPayloadModel,
  CreateJobPayloadSchema,
  UpdateJobPayloadModel
} from "@/lib/models/job.model";
import { getNestedInputValues, showErrorNotification, showNotification } from "@/utils/functions";
import { createJobApi, updateJobApi } from "@/lib/services/api/job.service";
import { getFormattedError } from "@/utils/format-error";
import { ActionResult } from "@/utils/action-results";
import { IssueModel } from "@/lib/models/issue.model";

const createJobAction = async (_: ActionResult, formData: FormData) => {
  const structuredInput = getNestedInputValues(formData);

  if (!structuredInput?.issues?.length) {
    return getFormattedError("Issues are required.");
  }

  const payload: CreateJobPayloadModel = {
    technician_id: formData.get("technician_id") as string,
    problem_type_id: formData.get("problem_type_id") as string,
    customer_id: formData.get("customer_id") as string,
    customer: {
      name: formData.get("customer_name") as string,
      phone: formData.get("customer_phone") as string,
      company_name: formData.get("customer_company_name") as string
    },
    issues: structuredInput.issues.map((item: IssueModel) => ({
      ...item,
      problem_id: +item.problem_id,
      brand_id: +item.brand_id,
      model_id: +item.model_id,
      quantity: +item.quantity,
      charges: +item.charges,
      total: +item.total
    }))
  };

  if (payload.customer?.name && payload.customer?.phone && !payload.customer_id) {
    payload.customer_id = "new";
  }

  const validatedPayload = await CreateJobPayloadSchema.safeParseAsync(payload);
  if (!validatedPayload.success) {
    showErrorNotification("Validation errors");
    return getFormattedError(validatedPayload?.error);
  }

  try {
    await createJobApi(payload);
    redirect("/dashboard/job");
    return {};
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

const updateJobAction = async (_: ActionResult, formData: FormData) => {
  const structuredInput = getNestedInputValues(formData);

  const payload: UpdateJobPayloadModel = {
    id: formData.get("id") as string,
    technician_id: formData.get("technician_id") as string,
    problem_type_id: formData.get("problem_type_id") as string,
    job_status_id: Number(formData.get("job_status_id") as string),
    customer_id: formData.get("customer_id") as string,
    customer: {
      name: formData.get("customer_name") as string,
      phone: formData.get("customer_phone") as string,
      company_name: formData.get("customer_company_name") as string
    },
    issues: structuredInput.issues.map((item: IssueModel) => ({
      ...item,
      id: item.id,
      problem_id: +item.problem_id,
      brand_id: +item.brand_id,
      model_id: +item.model_id,
      quantity: +item.quantity,
      charges: +item.charges,
      total: +item.total
    }))
  };

  if (payload.customer?.name && payload.customer?.phone && !payload.customer_id) {
    payload.customer_id = "new";
  }

  const validatedPayload = await CreateJobPayloadSchema.safeParseAsync(payload);
  if (!validatedPayload.success) {
    showErrorNotification("Validation errors");
    return getFormattedError(validatedPayload?.error);
  }

  try {
    await updateJobApi(payload.id, payload);
    showNotification("Updated successfully!");
    // revalidatePath(`/dashboard/job/${payload.id}?tab=detail`)
    return { success: "Updated successfully!" };
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

export { createJobAction, updateJobAction };
