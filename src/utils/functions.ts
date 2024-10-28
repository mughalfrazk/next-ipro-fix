export const getNestedInputValues = (formData: FormData) => {
  const nestedListRegex = /^([^\[]+)(\[\d+\])(\[[^\]]+\])$/
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const dataform_obj: any = {}
  for (const [key, value] of Object.entries(Object.fromEntries(formData.entries()))) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const match: any = key.match(nestedListRegex)

    const match01 = match?.[1]
    const match02 = match?.[2].replace(/[\])}[{(]/g, '')
    const match03 = match?.[3].replace(/[\])}[{(]/g, '')

    if (!dataform_obj[match01]) {
      dataform_obj[match01] = [];
    }
    if (!dataform_obj?.[match01][match02]) {
      dataform_obj[match01][match02] = {};
    }

    dataform_obj[match01][match02][match03] = value;
  }

  return dataform_obj
}

export const colorForUserRole = (name: string) => {
  console.log(name)
  return name === "Admin"
    ? "grape"
    : name === "Receptionist"
    ? "green"
    : name === "Technician"
    ? "blue"
    : name === "Office Boy"
    ? "red"
    : "black";
};
