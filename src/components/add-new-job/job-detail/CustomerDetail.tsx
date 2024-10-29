"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Card, ComboboxData, Divider, Grid, GridCol } from "@mantine/core";

import Heading from "@/components/common/Heading";
import IproSelect from "@/components/core/IproSelect";
import IproTextInput from "@/components/core/IproTextInput";
import { CustomerListModel, CustomerModel } from "@/lib/models/customer.model";
import { getCustomerListApi } from "@/lib/services/api/customer.service";
import { FieldErrorPropsType } from "@/hooks/use-action-errors";

const CustomerDetail = ({ getFieldErrorProps }: FieldErrorPropsType) => {
  const [customers, setCustomers] = useState<CustomerListModel>([]);
  const [nameOptionsList, setNameOptionsList] = useState<ComboboxData>([]);
  const [phoneOptionsList, setPhoneOptionsList] = useState<ComboboxData>([]);

  const [name, setName] = useState<string[]>([]);
  const [phone, setPhone] = useState<string[]>([]);
  const [company, setCompany] = useState<string>("");
  const [nameSearch, setNameSearch] = useState<string>("");
  const [phoneSearch, setPhoneSearch] = useState<string>("");

  const [customerId, setCustomerId] = useState<string>("");

  const getCustomerList = async () => {
    try {
      const result = await getCustomerListApi();
      setCustomers(result);
      setNameOptionsList(
        result.map((item) => ({ label: item.name, value: item.id }))
      );
      setPhoneOptionsList(
        result.map((item) => ({ label: item.phone, value: item.id }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onNameChange = (value: string | null) => {
    console.log("onChangeHandler: ", value);
    const [selectedCustomer] = customers.filter((item) => item.id === value);
    if (selectedCustomer) onChangeHandler(selectedCustomer);
    else if (value) setName([value]);
  };

  const onPhoneChange = (value: string | null) => {
    console.log("onChangeHandler: ", value);
    const [selectedCustomer] = customers.filter((item) => item.id === value);
    if (selectedCustomer) onChangeHandler(selectedCustomer);
    else if (value) setPhone([value]);
  };

  const onChangeHandler = (value: CustomerModel) => {
    setName([value.name]);
    setPhone([value.phone]);
    setCompany(value.company_name ?? "");

    setCustomerId(value.id);
  };

  const onNameSearchHandler = (value: string) => {
    setNameSearch(value);
  };

  const onPhoneSearchHandler = (value: string) => {
    setPhoneSearch(value);
  };

  const onTagRemoveHandler = (
    value: string,
    setValue: Dispatch<SetStateAction<string[]>>
  ) => {
    if (customerId) {
      setName([]);
      setPhone([]);
      setCompany("");

      setCustomerId("");
    } else {
      setValue([]);
    }
    console.log("onTagRemoveHandler");
  };

  useEffect(() => {
    getCustomerList();
  }, []);

  return (
    <Card>
      <Heading
        title="Customer Details"
        description="Fill out the customer details to create a new Job"
      />
      <Divider mt={10} mb={20} />

      <Grid>
        <GridCol span={4}>
          <IproSelect
            componentType="tags"
            name="customer_name"
            label="Customer Name"
            maxTags={1}
            value={name as string & string[]}
            data={nameOptionsList}
            searchValue={nameSearch}
            onOptionSubmit={onNameChange}
            onSearchChange={onNameSearchHandler}
            onRemove={(value: string) => onTagRemoveHandler(value, setName)}
            maxDropdownHeight={200}
            {...getFieldErrorProps("customer_id")}
          />
        </GridCol>
        <GridCol span={4}>
          <IproSelect
            componentType="tags"
            name="customer_phone"
            label="Mobile Number"
            maxTags={1}
            value={phone as string & string[]}
            data={phoneOptionsList}
            searchValue={phoneSearch}
            onOptionSubmit={onPhoneChange}
            onSearchChange={onPhoneSearchHandler}
            onRemove={(value: string) => onTagRemoveHandler(value, setPhone)}
            maxDropdownHeight={200}
            {...getFieldErrorProps("customer_id")}
          />
        </GridCol>
        <GridCol span={4}>
          <IproTextInput
            name="customer_company_name"
            label="Company Name"
            value={company}
            readOnly={!!customerId}
            onChange={(e) => setCompany(e.currentTarget.value)}
          />
        </GridCol>
        <IproTextInput
          name="customer_id"
          label="Company Name"
          value={customerId}
          onChange={(e) => setCustomerId(e.currentTarget.value)}
          style={{ display: "none" }}
        />
      </Grid>
    </Card>
  );
};

export default CustomerDetail;
