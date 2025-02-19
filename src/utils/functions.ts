import { format } from "date-fns";
import { notifications } from "@mantine/notifications";

import { JobModel } from "@/lib/models/job.model";
import { InvoiceModel } from "@/lib/models/invoice.model";
import { ProfileModel } from "@/lib/models/user.model";
import { RoleTypes } from "@/types/roles.types";
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

export const colorForUserRole = (name: string | undefined) => {
  return name === "super_admin"
    ? "grape.8"
    : name === "receptionist"
      ? "green.9"
      : name === "technician"
        ? "primary.6"
        : name === "accountant"
          ? "cyan.9"
          : name === "admin"
            ? "red.8"
            : name === "staff"
              ? "red.8"
              : "gray.8";
};

export const colorForInvoiceStatus = (name: string) => {
  return name === "Generated"
    ? "red"
    : name === "Pending Payment"
      ? "indigo"
      : name === "Overdue"
        ? "green"
        : name === "Overdue"
          ? "primary.6"
          : "black";
};

export const colorForJobStatus = (name: string) => {
  return name === "Device Received"
    ? "orange.9"
    : name === "In Progress"
      ? "indigo.6"
      : name === "Job Done"
        ? "primary.6"
        : name === "Delivered"
          ? "green.9"
          : name === "Job Lost"
            ? "red.7"
            : "grey.7";
};

export const colorForProblemType = (name: string) => {
  return name === "SW-Software"
    ? "red"
    : name === "HW-Hardware"
      ? "indigo"
      : name === "GW-Android"
        ? "green"
        : name === "GW-Apple Iphone"
          ? "primary.6"
          : "black";
};

export const capitalizeFirstLetter = (val: string) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
};

export const showDateNicely = (date: string) => {
  const splitted_date = date.split("T");

  return format(new Date(date), "dd-MM-yyyy - HH:mm a");
  return `${splitted_date[0]} - ${splitted_date[1].split(".")[0].split(":").slice(0, 2).join(":")}`;
};

export const mapJobToInvoice = (job: JobModel): InvoiceModel => {
  const issue_total = job.issues.reduce((prev, curr) => prev + curr.total, 0);
  const purchase_total = job?.purchases?.reduce((prev, curr) => prev + curr.total, 0) ?? 0;
  const total = issue_total + purchase_total;

  const technician = job?.technician?.role?.name === "technician" ? job.technician : null;

  const invoice: InvoiceModel = {
    id: "",
    issue_total: issue_total,
    purchase_total: purchase_total,
    customer: job.customer,
    technician,
    total,
    barcode: "",
    created_at: "",
    updated_at: "",
    deleted_at: "",
    issues: [
      ...job.issues.map((item, idx) => ({
        id: `${idx}`,
        item_type: "",
        charges: item.charges,
        quantity: item.quantity,
        total: item.total,
        brand: {
          id: item?.brand?.id,
          name: item.brand?.name
        },
        model: {
          id: item?.model?.id,
          name: item?.model?.name ?? ""
        },
        problem: {
          id: item?.problem?.id,
          name: item.problem?.name ?? ""
        }
      }))
    ],
    purchases: !!job?.purchases?.length
      ? [
          ...job?.purchases.map((item, idx) => ({
            id: `${idx}`,
            item_type: "",
            charges: item.charges,
            quantity: item.quantity,
            total: item.total,
            model: {
              id: item?.model?.id,
              name: item?.model?.name ?? ""
            },
            part: {
              id: item?.part?.id,
              name: item.part?.name ?? ""
            }
          }))
        ]
      : []
  };

  return invoice;
};

export const colorForExpenseType = (name: string) => {
  // Generate a random color for the expense type.
  const colors = [
    "red.8",
    "green.8",
    "blue.8",
    "yellow.8",
    "purple.8",
    "cyan.8",
    "violet.8",
    "gray.8",
    "teal.8",
    "orange.8",
    "red.8",
    "green.8",
    "blue.8",
    "yellow.8",
    "purple.8",
    "cyan.8",
    "violet.8",
    "gray.8",
    "teal.8",
    "orange.8",
    "red.8",
    "green.8",
    "blue.8",
    "yellow.8",
    "purple.8",
    "cyan.8",
    "violet.8",
    "gray.8",
    "teal.8",
    "orange.8"
  ];

  return colors[name.length];
};
export const titleCase = (s: string) => {
  return s
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(/_/g, " ");
};

export const getYesterdayDate = (dateOnly = false): Date => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  d.setHours(0, 0, 0, 0);
  return dateOnly ? new Date(d) : d;
};

export const getRoleNiceName = (user: ProfileModel) => {
  return user.role.name === RoleTypes.TECHNICIAN && user?.speciality
    ? `${titleCase(user.role.name)}-${user?.speciality?.name?.split("-")?.[0]?.toUpperCase()}`
    : titleCase(user.role.name);
};
