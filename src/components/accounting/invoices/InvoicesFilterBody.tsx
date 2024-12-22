import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Text, Stack, Grid, Group } from "@mantine/core";
import { DateInput } from "@mantine/dates";

import { showDateNicely } from "@/utils/functions";
import IproButton from "@/components/core/IproButton";
import { AppliedFiltersType } from "@/components/common/Table";
import { InvoiceTableListModel } from "@/lib/models/invoice.model";
import { getInvoiceStatusListApi } from "@/lib/services/api/invoice-status.service";
import IproCombobox, { IproComboboxItem } from "@/components/core/IproCombobox";
import { getCustomerListApi } from "@/lib/services/api/customer.service";

type InvoiceFilterBodyProps = {
  invoices: InvoiceTableListModel;
  close: () => void;
  appliedFilters: AppliedFiltersType[];
  setFilteredInvoices: Dispatch<SetStateAction<InvoiceTableListModel>>;
  setAppliedFilters: Dispatch<SetStateAction<AppliedFiltersType[]>>;
};

const InvoicesFilterBody = ({
  invoices,
  close,
  appliedFilters,
  setFilteredInvoices,
  setAppliedFilters
}: InvoiceFilterBodyProps) => {
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [startDate, setStateDate] = useState<Date | null>(null);

  const [customerValue, setCustomerValue] = useState<IproComboboxItem[]>([]);
  const [customerOptions, setCustomerOptions] = useState<IproComboboxItem[]>([]);
  const [invoiceStatusValue, setInvoiceStatusValue] = useState<IproComboboxItem[]>([]);
  const [invoiceStatusOptions, setInvoiceStatusOptions] = useState<IproComboboxItem[]>([]);

  const getCustomersData = async () => {
    const result = await getCustomerListApi();
    setCustomerOptions(
      result.map((item) => ({
        label: item.name,
        value: item.id
      }))
    );
  };

  const getInvoiceStatusData = async () => {
    const result = await getInvoiceStatusListApi();
    setInvoiceStatusOptions(
      result.map((item) => ({
        label: item.name,
        value: String(item.id)
      }))
    );
  };

  const applyFiltersHandler = () => {
    const filteredInvoices = [...invoices];

    if (!!startDate) {
      setAppliedFilters((filters) => {
        const otherFilters = filters.filter((item) => item.name !== "Start");

        const updatedFilters = {
          name: "Start",
          value: showDateNicely(startDate.toISOString()).split(" ")[0],
          data: startDate
        };

        return [...otherFilters, updatedFilters];
      });
    }

    if (!!endDate) {
      setAppliedFilters((filters) => {
        const otherFilters = filters.filter((item) => item.name !== "End");

        const updatedFilters = {
          name: "End",
          value: showDateNicely(endDate.toISOString()).split(" ")[0],
          data: endDate
        };

        return [...otherFilters, updatedFilters];
      });
    }

    if (!!customerValue.length) {
      setAppliedFilters((filters) => {
        const otherFilters = filters.filter((item) => item.name !== "Customer");

        const updatedFilters = {
          name: "Customer",
          value: customerValue.reduce(
            (prev, curr, idx) => `${prev}${idx !== 0 ? " |" : ""} ${curr.label}`,
            ""
          ),
          data: customerValue
        };

        return [...otherFilters, updatedFilters];
      });
    }

    if (!!invoiceStatusValue.length) {
      setAppliedFilters((filters) => {
        const otherFilters = filters.filter((item) => item.name !== "Invoice Status");

        const updatedFilters = {
          name: "Job Status",
          value: invoiceStatusValue.reduce(
            (prev, curr, idx) => `${prev}${idx !== 0 ? " |" : ""} ${curr.label}`,
            ""
          ),
          data: invoiceStatusValue
        };

        return [...otherFilters, updatedFilters];
      });
    }

    setFilteredInvoices(
      filteredInvoices.filter(({ created_at, customer, invoice_status }) => {
        const createdAt = new Date(created_at);

        if (!!startDate && startDate > createdAt) return false;
        if (!!endDate && endDate < createdAt) return false;
        if (customerValue.length) return customerValue.some((j) => j.value === customer?.id);
        if (invoiceStatusValue.length)
          return invoiceStatusValue.some((j) => j.value === String(invoice_status.id));

        return true;
      })
    );

    close();
  };

  useEffect(() => {
    if (!!appliedFilters.length) {
      const [startFilter] = appliedFilters.filter((item) => item.name === "Start");
      const [endFilter] = appliedFilters.filter((item) => item.name === "End");
      const [customerFilter] = appliedFilters.filter((item) => item.name === "Customer");
      const [invoiceStatusFilter] = appliedFilters.filter((item) => item.name === "Invoice Status");

      if (startFilter) setStateDate(startFilter.data as Date);
      if (endFilter) setEndDate(endFilter.data as Date);
      if (customerFilter) setCustomerValue([...(customerFilter.data as IproComboboxItem[])]);
      if (invoiceStatusFilter)
        setInvoiceStatusValue([...(invoiceStatusFilter.data as IproComboboxItem[])]);
    }
  }, [appliedFilters]);

  useEffect(() => {
    getCustomersData();
    getInvoiceStatusData();
  }, []);

  return (
    <Stack>
      <Text size="sm">You can filter invoices by dates, customer and status wise</Text>
      <Grid grow>
        <Grid.Col span={3}>
          <DateInput
            label="Start Date"
            placeholder="Enter Start Date"
            valueFormat="YYYY MMM DD"
            size="sm"
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <DateInput
            label="End Date"
            placeholder="Enter End Date"
            valueFormat="YYYY MMM DD"
            size="sm"
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <IproCombobox
            label="Invoice Status"
            data={invoiceStatusOptions}
            value={invoiceStatusValue}
            setValue={setInvoiceStatusValue}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <IproCombobox
            label="Customer"
            data={customerOptions}
            value={customerValue}
            setValue={setCustomerValue}
          />
        </Grid.Col>
      </Grid>
      <Group justify="flex-end">
        <IproButton onClick={applyFiltersHandler}>Apply Filter</IproButton>
      </Group>
    </Stack>
  );
};

export default InvoicesFilterBody;
