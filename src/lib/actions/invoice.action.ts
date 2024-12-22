"use server"

import { getFormattedError } from "@/utils/format-error"
import { CreateInvoiceItemsPayloadModel, CreateInvoicePayloadModel, InvoiceModel } from "../models/invoice.model"
import { JobModel } from "../models/job.model"
import { showErrorNotification, showNotification } from "@/utils/functions"
import { revalidatePath } from "next/cache"
import { generateInvoiceForJobApi } from "../services/api/invoice.service"

export const generateInvoiceAction = async (job_id: string, invoice: InvoiceModel) => {
  const issues = invoice.issues.map(item => ({
    item_type: "ٰissue",
    brand_name: item.brand.name as string,
    brand_id: item.brand.id as number,
    issue_model_name: item.model.name as string,
    issue_model_id: item.model.id as number,
    problem_name: item.problem.name as string,
    problem_id: item.problem.id as number,
    charges: item.charges as number,
    quantity: item.quantity,
    total: item.total
  }))

  const purchases = invoice.purchases?.map(item => ({
    item_type: "purchase",
    purchase_model_name: item.model.name as string,
    purchase_model_id: item.model.id as number,
    part_name: item.part.name as string,
    part_id: item.part.id as number,
    quantity: item.quantity as number,
    total: item.total as number
  })) ?? []

  const payload: CreateInvoicePayloadModel = {
    job_id: job_id,
    total: invoice.total,
    issue_total: invoice.issue_total,
    customer_id: invoice.customer.id,
    purchase_total: invoice.purchase_total,
    technician_id: invoice.technician?.id ?? "",
    invoice_items: [...issues, ...purchases]
  }

  try {
    await generateInvoiceForJobApi(payload)
  } catch (error) {
    throw error
  }
}