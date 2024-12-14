import { ComboboxItem, Select, SelectProps, TagsInput, TagsInputProps } from "@mantine/core";

export type IproSelectOnChangeType = ((value: string | null, option: ComboboxItem) => void) &
  ((value: string[]) => void);

export type IproSelectProps = {
  componentType?: "tags";
} & SelectProps &
  TagsInputProps;

const IproSelect = ({ componentType, size = "md", ...otherProps }: IproSelectProps) => {
  if (componentType === "tags") return <TagsInput size={size} {...otherProps} />;

  return <Select size={size} {...otherProps} />;
};

export default IproSelect;
