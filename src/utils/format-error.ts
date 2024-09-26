import { ZodError } from 'zod';
import { ActionErrors, ActionResult, FieldErrors } from './action-results';
import { AuthError } from 'next-auth';
import { AxiosError } from 'axios';

export type AxiosErrorBody = {
  message: string;
  error: string;
  statusCode: number
}

/// Create an ActionErrors object with a field error
export function getErrorsForField(field: string, error: string): ActionErrors {
  return {
    fieldErrors: {
      [field]: error
    }
  }
}

/// Create an ActionErrors object with a form error
export function getErrorsForForm(error: string): ActionErrors {
  return {
    formErrors: [error]
  }
}

export function getFieldErrorFromState(state: ActionResult, field: string) {
  if (state.errors && state.errors?.fieldErrors) {
    return state.errors?.fieldErrors[field]
  }

  return undefined
}

/// Format an error into an ActionErrors object
export function getFormattedError(error: unknown): { errors: ActionErrors } {
  if (error instanceof ZodError) {
    // console.log('ZodError', error);
    return {
      errors: formatZodError(error)
    }
  }

  if (error instanceof AxiosError) {
    const e = error as AxiosError;
    // console.log("AxiosErr: ", error.code)
    if (error?.code === "ECONNREFUSED") {
      return {
        errors: {
          formErrors: ["Server connection error, please try again later."]
        }
      }
    }
    const errorBody = e?.response?.data as AxiosErrorBody

    return {
      errors: {
        formErrors: [errorBody?.message ?? e.response?.statusText]
      }
    }
  }

  if (error instanceof AuthError) {
    const e = error as AuthError;
    if (e.cause?.err instanceof AxiosError) {
      const axiosError = e.cause?.err as AxiosError
      if (axiosError?.code === "ECONNREFUSED") {
        return {
          errors: {
            formErrors: ["Server connection error, please try again later."]
          }
        }
      }

      const errorBody = axiosError?.response?.data as AxiosErrorBody

      return {
        errors: {
          formErrors: [errorBody?.message ?? axiosError.response?.statusText]
        }
      }
    }

    return {
      errors: {
        formErrors: [e.cause?.err?.message || e.message]
      }
    }
  }

  if (error instanceof Error) {
    // console.log('Error', error);
    const e = error as Error;
    return {
      errors: {
        formErrors: [e.message]
      }
    }
  }

  if (typeof error === 'string') {
    // console.log('Error message', error);
    return {
      errors: {
        formErrors: [error]
      }
    }
  }

  // console.log('Unknown error', error);
  return {
    errors: {
      formErrors: ['Something went wrong, please try again']
    }
  }
}

/// Format a ZodError into an ActionErrors object
function formatZodError(error: ZodError): ActionErrors {
  const zodErrors = error.flatten();
  const errors: ActionErrors = {
    formErrors: zodErrors?.formErrors
  };

  // join errors in fieldErrors to a single string
  if (zodErrors?.fieldErrors) {
    const fieldErrors: FieldErrors = {};

    for (const key in zodErrors.fieldErrors) {
      fieldErrors[key] = zodErrors.fieldErrors[key]?.join(', ');
    }
    errors.fieldErrors = fieldErrors;
  }
  return errors;
}