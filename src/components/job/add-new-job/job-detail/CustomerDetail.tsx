"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Badge,
  Card,
  ComboboxData,
  Divider,
  Grid,
  GridCol,
  Group,
  Stack,
  Text
} from "@mantine/core";

import Heading from "@/components/common/Heading";
import IproSelect from "@/components/core/IproSelect";
import IproTextInput from "@/components/core/IproTextInput";
import { CustomerListModel, CustomerModel } from "@/lib/models/customer.model";
import { getCustomerListApi } from "@/lib/services/api/customer.service";
import { FieldErrorPropsType } from "@/hooks/use-action-errors";
import { JobModel } from "@/lib/models/job.model";

type CustomerDetailProps = {
  job?: JobModel;
  customer?: CustomerModel;
  isJobBeyondProgress?: () => boolean;
} & FieldErrorPropsType;

const CustomerDetail = ({
  job,
  customer,
  getFieldErrorProps,
  isJobBeyondProgress
}: CustomerDetailProps) => {
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
      if (!job) {
        const result = await getCustomerListApi();
        setCustomers(result);
        setNameOptionsList(result.map((item) => ({ label: item.name, value: item.id })));
        setPhoneOptionsList(result.map((item) => ({ label: item.phone, value: item.id })));
      }
    } catch (error) {}
  };

  const onNameChange = (value: string | null) => {
    const [selectedCustomer] = customers.filter((item) => item.id === value);
    if (selectedCustomer) onChangeHandler(selectedCustomer);
    else if (value) setName([value]);
  };

  const onPhoneChange = (value: string | null) => {
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

  const onTagRemoveHandler = (value: string, setValue: Dispatch<SetStateAction<string[]>>) => {
    if (customerId) {
      setName([]);
      setPhone([]);
      setCompany("");

      setCustomerId("");
    } else {
      setValue([]);
    }
  };

  useEffect(() => {
    getCustomerList();
  }, []);

  useEffect(() => {
    if (customer) {
      onChangeHandler(customer);
    }
  }, [customer]);

  return (
    <Card>
      <Group justify="space-between">
        <Heading
          title="Customer Details"
          description="Fill out the customer details to create a new Job"
        />
        {getFieldErrorProps(["customer", "customer_id"]).error && (
          <Badge color="red">Please fill all the customers details</Badge>
        )}
      </Group>
      <Divider mt={10} mb={20} />

      <Grid>
        <GridCol span={4}>
          {isJobBeyondProgress?.() ? (
            <Stack gap={5} my={8}>
              <Text size="sm" fw="bold">
                Name:
              </Text>
              <Text>{job?.customer.name}</Text>
            </Stack>
          ) : (
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
              readOnly={!!customer?.id}
            />
          )}
        </GridCol>
        <GridCol span={4}>
          {isJobBeyondProgress?.() ? (
            <Stack gap={5} my={8}>
              <Text size="sm" fw="bold">
                Phone:
              </Text>
              <Text>{job?.customer.phone}</Text>
            </Stack>
          ) : (
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
              readOnly={!!customer?.id}
            />
          )}
        </GridCol>
        <GridCol span={4}>
          {isJobBeyondProgress?.() ? (
            <Stack gap={5} my={8}>
              <Text size="sm" fw="bold">
                Company name:
              </Text>
              <Text>{job?.customer.company_name}</Text>
            </Stack>
          ) : (
            <IproTextInput
              name="customer_company_name"
              label="Company Name"
              value={company}
              readOnly={!!customerId}
              onChange={(e) => setCompany(e.currentTarget.value)}
            />
          )}
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
