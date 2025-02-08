import { ComboboxItem, Select, SelectProps, TagsInput, TagsInputProps } from "@mantine/core";
import { RefObject } from "react";

export type IproSelectOnChangeType = ((value: string | null, option: ComboboxItem) => void) &
  ((value: string[]) => void);

export type IproSelectProps = {
  componentType?: "tags";
  selectRef?: RefObject<HTMLInputElement>;
} & SelectProps &
  TagsInputProps;

const IproSelect = ({ componentType, selectRef, size = "md", ...otherProps }: IproSelectProps) => {
  if (componentType === "tags") return <TagsInput size={size} {...otherProps} />;

  return <Select ref={selectRef} size={size} {...otherProps} />;
};

export default IproSelect;
