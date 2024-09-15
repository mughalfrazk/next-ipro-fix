import { Box, TextInput, TextInputProps } from "@mantine/core";

interface IproTextInputProps
  extends Omit<
    TextInputProps,
    "variant" | "classNames" | "aria-label" | "w" | "width"
  > {
  variant?: string;
  ariaLabel?: string;
  width?: number | string;
}

const IproTextInput = ({
  ariaLabel,
  variant = "filled",
  width,
  ...rest
}: IproTextInputProps) => {
  return (
    <Box w={"100%"}>
      <TextInput variant={variant} aria-label={ariaLabel} {...rest} />
    </Box>
  );
};

export default IproTextInput;