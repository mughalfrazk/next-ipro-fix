import { Select, SelectProps } from "@mantine/core";

type IproSelectProps = SelectProps;

const IproSelect = ({ size = "md", ...otherProps }: IproSelectProps) => {
  return <Select size={size} {...otherProps} />;
};

export default IproSelect;
