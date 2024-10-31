import { ActionResult } from "@/utils/action-results";
import { CreateJobPayloadModel, CreateJobPayloadSchema } from "../models/job.model";
import { getFormattedError } from "@/utils/format-error";
import { getNestedInputValues, showErrorNotification } from "@/utils/functions";
import { createJobApi } from "../services/api/job.service";
import { IssueModel } from "../models/issue.model";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";
import { CreatePurchasesModel, CreatePurchasesSchema, PurchaseModel } from "../models/purchase.model";
import { validatePayload } from "@/utils/validate-payload";

const createJobAction = async (_: ActionResult, formData: FormData) => {
  const structuredInput = getNestedInputValues(formData)

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
      quantity: +item.quantity,
      charges: +item.charges,
      total: +item.total,
      brand_id: +item.brand_id
    }))
  }

  const validatedPayload = await CreateJobPayloadSchema.safeParseAsync(payload)
  if (!validatedPayload.success) {
    showErrorNotification("Validation errors")
    return getFormattedError(validatedPayload?.error)
  }

  try {
    await createJobApi(payload)
    redirect("/dashboard/job")
    return {}
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error
    console.log(error)
    return getFormattedError(error)
  }

}

const createJobPurchaseAction = async (_: ActionResult, formData: FormData) => {
  const structuredInput = getNestedInputValues(formData)
  console.log(structuredInput)
  const payload: CreatePurchasesModel = {
    job_id: formData.get("job_id") as string,
    purchases: structuredInput.purchases.map((item: PurchaseModel) => ({ ...item }))
  }

  const validatedPayload = await CreatePurchasesSchema.safeParseAsync(payload)
  if (!validatedPayload.success) {
    showErrorNotification("Validation errors")

    console.log(validatedPayload?.error)

    return getFormattedError(validatedPayload?.error)
  }

  try {

    return {}
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error
    console.log(error)
    return getFormattedError(error)
  }
}

export { createJobAction, createJobPurchaseAction }