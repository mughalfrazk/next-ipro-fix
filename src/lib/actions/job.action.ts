import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

import { CreateJobPayloadModel, CreateJobPayloadSchema } from "@/lib/models/job.model";
import { getNestedInputValues, showErrorNotification } from "@/utils/functions";
import { getFormattedError } from "@/utils/format-error";
import { createJobApi } from "@/lib/services/api/job.service";
import { ActionResult } from "@/utils/action-results";
import { IssueModel } from "@/lib/models/issue.model";

const createJobAction = async (_: ActionResult, formData: FormData) => {
  const structuredInput = getNestedInputValues(formData);

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
    console.log(error);
    return getFormattedError(error);
  }
};

export { createJobAction };
