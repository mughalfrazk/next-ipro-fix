export type ActionResult = {
  errors?: ActionErrors;
  success?: unknown;
};

export type ActionErrors = {
  fieldErrors?: FieldErrors;
  formErrors?: string[];
};

export type FieldErrors = {
  [x: number]: string | undefined;
  [x: string]: string | undefined;
  [x: symbol]: string | undefined;
};
