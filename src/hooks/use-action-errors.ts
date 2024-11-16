"use client";

import { useState, useEffect } from "react";
import { ActionErrors, ActionResult } from "@/utils/action-results";

export type FieldErrorPropsType = {
  getFieldErrorProps: (value: string | string[]) => {
    error: string | undefined;
    onChange: () => void;
  };
};

export function useActionErrors(state: ActionResult = {}) {
  const [errors, setErrors] = useState<ActionErrors>();

  useEffect(() => {
    setErrors(state?.errors);
  }, [state?.errors]);

  const setFieldError = (fields: string | string[], value?: string) => {
    if (!fields) return;

    if (typeof fields === "string") {
      fields = [fields];
    }

    const fieldErrors = errors?.fieldErrors || {};

    fields.forEach((field) => {
      if (!field) return;

      if (value === null || value === undefined) {
        delete fieldErrors[field];
      } else if (Array.isArray(value)) {
        fieldErrors[field] = value.join(", ");
      } else if (typeof value === "string") {
        fieldErrors[field] = value;
      } else {
        fieldErrors[field] = value as string;
      }
    });

    setErrors({ ...errors, fieldErrors });
  };

  const getFieldErrorProps = (value: string | string[]) => {
    const fieldErrors = errors?.fieldErrors || {};

    let error;
    if (typeof value === "string") error = fieldErrors[value];
    else {
      for (let i = 0; i < value.length; i++) {
        const element = value[i];
        if (!!fieldErrors[element]) {
          error = fieldErrors[element];
          break;
        }
      }
    }

    return {
      error,
      onChange: () => setFieldError(value)
    };
  };

  return {
    errors,
    setFieldError,
    getFieldErrorProps
  };
}
