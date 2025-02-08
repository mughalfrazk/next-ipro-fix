import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import { ComboboxData, ComboboxItem } from "@mantine/core";

import IproSelect, { IproSelectProps } from "@/components/core/IproSelect";
import { getFormattedError } from "@/utils/format-error";
import { showErrorNotification } from "@/utils/functions";

type CreateUpdateSelectInputProps = {
  label?: string;
  name: string;
  inputDefaultValue: string | number | undefined;
  getDataFromApiAndSetOption?: () => Promise<ComboboxData>;
  setSelectedValue?: Dispatch<SetStateAction<ComboboxItem | undefined>>;
  onValueClear?: boolean;
  setOnValueClear?: Dispatch<SetStateAction<boolean>>;
  syncData?: ComboboxData;
} & IproSelectProps;

const CreateUpdateSelectInput = ({
  label,
  name,
  inputDefaultValue,
  getDataFromApiAndSetOption,
  setSelectedValue,
  onValueClear,
  setOnValueClear,
  syncData,
  ...otherProps
}: CreateUpdateSelectInputProps) => {
  const selectRef = useRef<HTMLInputElement>(null);
  const [optionList, setOptionList] = useState<ComboboxData>([]);
  const [optionItem, setOptionItem] = useState<ComboboxItem | null>();
  const [searchValue, setSearchValue] = useState<string>("");

  const getDataFromApi = useCallback(async () => {
    if (!getDataFromApiAndSetOption) return;

    try {
      const result = await getDataFromApiAndSetOption();
      setOptionList(result);
    } catch (error) {
      const e = getFormattedError(error);
      showErrorNotification(e.errors?.formErrors?.[0]);
    }
  }, []);

  const onOptionChange = useCallback(
    (value: string | null) => {
      const [selectedItem] = optionList.filter(
        (item) => (item as unknown as ComboboxItem).value === value
      );
      if (value) {
        setOptionItem(selectedItem as ComboboxItem);
        if (setSelectedValue) setSelectedValue(selectedItem as ComboboxItem);
        if (setOnValueClear) setOnValueClear(false);
      }
    },
    [optionList]
  );

  useEffect(() => {
    getDataFromApi();
  }, [getDataFromApi]);

  useEffect(() => {
    if (inputDefaultValue && optionList.length && inputDefaultValue) {
      onOptionChange(String(inputDefaultValue));
    }
  }, [inputDefaultValue, optionList, onOptionChange]);

  useEffect(() => {
    if (onValueClear && setOnValueClear) {
      setOptionItem(null);
      setOptionList([]);
      setSearchValue("");
      setOnValueClear(false);
    }
  }, [onValueClear]);

  useEffect(() => {
    if (syncData) setOptionList(syncData);
  }, [syncData]);

  return (
    <IproSelect
      selectRef={selectRef}
      size="md"
      label={label}
      name={name}
      data={optionList}
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      value={optionItem?.value as string & string[]}
      onOptionSubmit={onOptionChange}
      comboboxProps={{ transitionProps: { transition: "pop", duration: 200 } }}
      {...otherProps}
    />
  );
};

export default CreateUpdateSelectInput;
