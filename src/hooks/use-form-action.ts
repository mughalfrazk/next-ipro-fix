import { useEffect } from "react";
import { useFormState } from "react-dom";

import { ActionResult } from "@/utils/action-results";
import { showErrorNotification, showNotification } from "@/utils/functions";
import { useActionErrors } from "./use-action-errors";

export const useFormAction = (
  action: (a: ActionResult, b: FormData) => Promise<ActionResult>,
  initialState: ActionResult
) => {
  const [state, formAction] = useFormState(action, initialState);
  const actionErrors = useActionErrors(state);

  useEffect(() => {
    if (!!state) {
      const result = state as ActionResult;
      if (!!result?.errors?.formErrors?.length) {
        showErrorNotification(result?.errors?.formErrors[0]);
      } else if (typeof result?.success === "string" && result.success.length) {
        // Success feedback is centralized here so server actions don't need to
        // call client-only Mantine notifications directly.
        showNotification(result.success);
      }
    }
  }, [state]);

  return { state, formAction, ...actionErrors };
};
