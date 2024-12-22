import { IproComboboxItem } from "@/components/core/IproCombobox";
import { useReducer } from "react";

type InvoiceFilterState = {
  startDate: Date | null;
  endDate: Date | null;
  invoiceStatusValue: IproComboboxItem[];
  invoiceStatusOptions: IproComboboxItem[];
  customerValue: IproComboboxItem[];
  customerOptions: IproComboboxItem[];
};

const initialArgs = {
  startDate: null,
  endDate: null,
  invoiceStatusValue: [],
  invoiceStatusOptions: [],
  customerValue: [],
  customerOptions: []
};

const ACTIONS = {
  SET_INVOICE_STATUS_OPTION: "set-invoice-status-option",
  SET_INVOICE_STATUS_VALUE: "set-invoice-status-value",
  SET_CUSTOMER_OPTION: "set-customer-option",
  SET_CUSTOMER_VALUE: "set-customer-value",
  SET_START_DATE: "set-start-date",
  SET_END_DATE: "set-end-date"
};

const filterReducer = (state: InvoiceFilterState, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_INVOICE_STATUS_OPTION: {
      return {
        ...state,
        invoiceStatusOptions: action.invoiceStatusOptions
      };
    }
    case ACTIONS.SET_INVOICE_STATUS_VALUE: {
      return {
        ...state,
        invoiceStatusValue: action.invoiceStatusValue
      };
    }
    case ACTIONS.SET_CUSTOMER_OPTION: {
      return {
        ...state,
        customerOptions: action.customerOptions
      };
    }
    case ACTIONS.SET_CUSTOMER_VALUE: {
      return {
        ...state,
        customerValue: action.customerValue
      };
    }
    case ACTIONS.SET_START_DATE: {
      return {
        ...state,
        startDate: action.startDate
      };
    }
    case ACTIONS.SET_END_DATE: {
      return {
        ...state,
        endDate: action.endDate
      };
    }
  }
  throw Error("Unknown action.");
};

export const useInvoiceFilters = () => {
  const [state, dispatch] = useReducer(filterReducer, initialArgs);

  const setInvoiceStatusOptions = (option: IproComboboxItem[]) =>
    dispatch({
      type: ACTIONS.SET_INVOICE_STATUS_OPTION,
      data: option
    });

  const setInvoiceStatusValue = (option: IproComboboxItem[]) =>
    dispatch({
      type: ACTIONS.SET_INVOICE_STATUS_OPTION,
      data: option
    });

  const setCustomerOptions = (option: IproComboboxItem[]) =>
    dispatch({
      type: ACTIONS.SET_INVOICE_STATUS_OPTION,
      data: option
    });

  const setCustomerValue = (option: IproComboboxItem[]) =>
    dispatch({
      type: ACTIONS.SET_INVOICE_STATUS_OPTION,
      data: option
    });

  const setStartDate = (option: IproComboboxItem[]) =>
    dispatch({
      type: ACTIONS.SET_INVOICE_STATUS_OPTION,
      data: option
    });

  const setEndDate = (option: IproComboboxItem[]) =>
    dispatch({
      type: ACTIONS.SET_INVOICE_STATUS_OPTION,
      data: option
    });

  return [
    state,
    {
      setInvoiceStatusOptions,
      setInvoiceStatusValue,
      setCustomerOptions,
      setCustomerValue,
      setStartDate,
      setEndDate
    },
    dispatch
  ];
};
