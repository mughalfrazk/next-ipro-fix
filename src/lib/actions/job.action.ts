import { ActionResult } from '@/utils/action-results'
import {
  CreateJobPayloadModel,
  CreateJobPayloadSchema,
} from '../models/job.model'
import { getFormattedError } from '@/utils/format-error'
import { getNestedInputValues, showErrorNotification } from '@/utils/functions'
import { createJobApi } from '../services/api/job.service'
import { IssueModel } from '../models/issue.model'
import { redirect } from 'next/navigation'
import { isRedirectError } from 'next/dist/client/components/redirect'

const createJobAction = async (_: ActionResult, formData: FormData) => {
  const structuredInput = getNestedInputValues(formData)

  const payload: CreateJobPayloadModel = {
    technician_id: formData.get('technician_id') as string,
    problem_type_id: formData.get('problem_type_id') as string,
    customer_id: formData.get('customer_id') as string,
    customer: {
      name: formData.get('customer_name') as string,
      phone: formData.get('customer_phone') as string,
      company_name: formData.get('customer_company_name') as string,
    },
    issues: structuredInput.issues.map((item: IssueModel) => ({
      ...item,
      quantity: +item.quantity,
      charges: +item.charges,
      total: +item.total,
      brand_id: +item.brand_id,
    })),
  }

  const validatedPayload = await CreateJobPayloadSchema.safeParseAsync(payload)
  if (!validatedPayload.success) {
    console.log(validatedPayload)
    console.log(
      'getFormattedError(validatedPayload?.error): ',
      getFormattedError(validatedPayload?.error),
    )
    showErrorNotification('Validation errors')
    return getFormattedError(validatedPayload?.error)
  }

  return {}
  try {
    await createJobApi(payload)
    redirect('/dashboard/job')
    return {}
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error
    console.log(error)
    return getFormattedError(error)
  }
}

export { createJobAction }
