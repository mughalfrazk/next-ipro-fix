import { useEffect } from "react";
import { useFormState } from "react-dom";
import { notifications } from "@mantine/notifications";

import { ActionResult } from "@/utils/action-results";
import { useActionErrors } from "./use-action-errors";

export const useFormAction = (action: (a: ActionResult, b: FormData) => Promise<{}>, initialState: {}) => {
  const [state, formAction] = useFormState(action, initialState);
  const actionErrors = useActionErrors(state);

  useEffect(() => {
    if (!!state) {
      const result = state as ActionResult
      if (!!result?.errors?.formErrors?.length) {
        notifications.show({ message: result?.errors?.formErrors[0], color: 'red' })
      }
    }
  }, [state])

  return { state, formAction, ...actionErrors }
}