import { Select, SelectProps } from "@mantine/core";

type IproSelectProps = SelectProps;

const IproSelect = ({ ...otherProps }: IproSelectProps) => {
  return <Select {...otherProps} />;
};

export default IproSelect;
