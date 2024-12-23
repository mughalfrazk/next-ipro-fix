import { useEffect } from "react";
import { useFormState } from "react-dom";

import { ActionResult } from "@/utils/action-results";
import { showErrorNotification } from "@/utils/functions";
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
      }
    }
  }, [state]);

  return { state, formAction, ...actionErrors };
};
