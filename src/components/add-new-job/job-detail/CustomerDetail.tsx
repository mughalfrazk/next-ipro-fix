"use client";

import { useEffect, useState } from "react";
import {
  Card,
  ComboboxData,
  Divider,
  Grid,
  GridCol,
  SelectProps,
  Stack,
  Text,
} from "@mantine/core";

import Heading from "@/components/common/Heading";
import IproSelect from "@/components/core/IproSelect";
import IproTextInput from "@/components/core/IproTextInput";
import { CustomerListModel } from "@/lib/models/customer.model";
import { getCustomerListApi } from "@/lib/services/api/customer.service";

const CustomerDetail = () => {
  const [customers, setCustomers] = useState<CustomerListModel>([]);
  const [optionsList, setOptionsList] = useState<ComboboxData>([]);

  const getCustomerList = async () => {
    try {
      const list = await getCustomerListApi();
      setCustomers(list);
    } catch (error) {
      console.log(error);
    }
  };

  const renderCustomerOption: SelectProps["renderOption"] = ({ option }) => {
    const [name, phone] = option.label.split(" & ");
    return (
      <Stack gap={0}>
        <Text>{name}</Text>
        <Text opacity={0.6} size="sm">
          {phone}
        </Text>
      </Stack>
    );
  };

  const onChangeHandler = (value: string | null) => {
    console.log(value)
  }

  useEffect(() => {
    setOptionsList(
      customers.map((item) => ({
        label: `${item.name} & ${item.phone}`,
        value: item.id,
      }))
    );
  }, [customers]);

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
            name="customer_name"
            label="Customer Name"
            data={optionsList}
            searchable
            maxDropdownHeight={200}
            renderOption={renderCustomerOption}
            onOptionSubmit={onChangeHandler}
          />
        </GridCol>
        <GridCol span={4}>
          <IproSelect
            name="customer_phone"
            label="Mobile Number"
            data={optionsList}
            searchable
            maxDropdownHeight={200}
            renderOption={renderCustomerOption}
          />
        </GridCol>
        <GridCol span={4}>
          <IproTextInput name="customer_company_name" label="Company Name" placeholder="Contoursoftware LTD"/>
        </GridCol>
      </Grid>
    </Card>
  );
};

export default CustomerDetail;
