"use server";

import { isRedirectError } from "next/dist/client/components/redirect";
import { validatePayload } from "@/utils/validate-payload";
import { getFormattedError } from "@/utils/format-error";
import { ActionResult } from "@/utils/action-results";
import { CreateCommentPayloadSchema } from "../models/comment.model";
import { createCommentApi } from "../services/api/comment.service";
import { revalidatePath } from "next/cache";

const createCommentAction = async (_: ActionResult, formData: FormData) => {
  const { parsed } = await validatePayload(formData, CreateCommentPayloadSchema);
  if (!parsed?.success) {
    return getFormattedError(parsed?.error);
  }

  try {
    await createCommentApi(parsed.data);
    revalidatePath(`/dashboard/job/${parsed.data.job_id}`);
    return { success: "Created successfully!" };
  } catch (error) {
    // `redirectTo` won't work without this line
    if (isRedirectError(error)) throw error;
    return getFormattedError(error);
  }
};

export { createCommentAction };
