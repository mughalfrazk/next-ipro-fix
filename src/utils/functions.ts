import { notifications } from "@mantine/notifications";
import classes from "@/styles/notification.module.css";

export const getNestedInputValues = (formData: FormData) => {
  const nestedListRegex = /^([^\[]+)(\[\d+\])(\[[^\]]+\])$/;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const dataform_obj: any = {};
  for (const [key, value] of Object.entries(Object.fromEntries(formData.entries()))) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const match: any = key.match(nestedListRegex);

    const match01 = match?.[1];
    const match02 = match?.[2].replace(/[\])}[{(]/g, "");
    const match03 = match?.[3].replace(/[\])}[{(]/g, "");

    if (!dataform_obj[match01]) {
      dataform_obj[match01] = [];
    }
    if (!dataform_obj?.[match01][match02]) {
      dataform_obj[match01][match02] = {};
    }

    dataform_obj[match01][match02][match03] = value;
  }

  return dataform_obj;
};

export const showNotification = (message: string) => {
  notifications.show({
    message,
    position: "top-right",
    autoClose: true
  });
};

export const showErrorNotification = (
  message: string = "Something went wrong, please try again."
) => {
  notifications.show({
    message,
    color: "red",
    position: "top-right",
    autoClose: true,
    classNames: classes
  });
};

export const colorForUserRole = (name: string) => {
  return name === "super_admin"
    ? "grape"
    : name === "receptionist"
      ? "green"
      : name === "technician"
        ? "pink"
        : name === "accountant"
          ? "blue"
          : name === "admin"
            ? "red"
            : "black";
};

export const capitalizeFirstLetter = (val: string) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
};

export const showDateNicely = (date: string) => {
  const splitted_date = date.split("T");
  return `${splitted_date[0]} ${splitted_date[1].split(".")[0]}`;
};
