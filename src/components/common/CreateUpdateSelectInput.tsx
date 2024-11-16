import { useEffect, useState } from "react";
import { ComboboxData, ComboboxItem } from "@mantine/core";

import IproSelect, { IproSelectProps } from "@/components/core/IproSelect";
import { getFormattedError } from "@/utils/format-error";
import { showErrorNotification } from "@/utils/functions";

type CreateUpdateSelectInputProps = {
  label?: string;
  name: string;
  inputDefaultValue: string | number | undefined;
  getDataFromApiAndSetOption: () => Promise<ComboboxData>;
} & IproSelectProps;

const CreateUpdateSelectInput = ({ label, name, inputDefaultValue, getDataFromApiAndSetOption, ...otherProps }: CreateUpdateSelectInputProps) => {
  const [optionList, setOptionList] = useState<ComboboxData>([]);
  const [optionItem, setOptionItem] = useState<ComboboxItem>();

  const getDataFromApi = async () => {
    try {
      const result = await getDataFromApiAndSetOption();
      setOptionList(result);
    } catch (error) {
      const e = getFormattedError(error);
      showErrorNotification(e.errors?.formErrors?.[0]);
    }
  };

  const onOptionChange = (value: string | null) => {
    const [selectedItem] = optionList.filter((item) => (item as unknown as ComboboxItem).value === value);
    if (value) setOptionItem(selectedItem as ComboboxItem);
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  useEffect(() => {
    if (inputDefaultValue && optionList.length && inputDefaultValue) {
      onOptionChange(String(inputDefaultValue));
    }
  }, [inputDefaultValue, optionList]);

  return (
    <IproSelect
      size="md"
      label={label}
      name={name}
      data={optionList}
      value={optionItem?.value as string & string[]}
      onOptionSubmit={onOptionChange}
      {...otherProps}
    />
  );
};

export default CreateUpdateSelectInput;
