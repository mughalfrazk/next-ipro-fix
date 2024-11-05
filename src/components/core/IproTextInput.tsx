"use client";

import { Box, TextInput, TextInputProps } from "@mantine/core";

interface IproTextInputProps
  extends Omit<TextInputProps, "variant" | "aria-label" | "w" | "width"> {
  variant?: string;
  ariaLabel?: string;
  width?: number | string;
}

const IproTextInput = ({
  ariaLabel,
  variant,
  width,
  ...rest
}: IproTextInputProps) => {
  return (
    <Box w={width}>
      <TextInput variant={variant} aria-label={ariaLabel} size="md" {...rest} />
    </Box>
  );
};

export default IproTextInput;
