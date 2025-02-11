"use client";

import { MouseEventHandler, ReactNode } from "react";
import { Button, ButtonProps, MantineColor } from "@mantine/core";

import IproSubmitButton, { SubmitButtonProps } from "./IproSubmitButton";
import classes from "./IproButton.module.css";

const getHeight = (size: string) => {
  switch (size) {
    case "xs":
      return 26;
    case "sm":
      return 30;
    case "md":
      return 34;
    case "lg":
      return 38;
    case "xl":
      return 42;
  }
};

export interface IproButtonProps extends ButtonProps {
  type?: "submit" | "reset" | "button";
  children: ReactNode;
  ariaLabel?: string;
  variant?: "filled" | "light" | "outline" | "subtle";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: MantineColor;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isIconOnly?: boolean;
  isCompact?: boolean;
  isSubmit?: boolean;
}

const IproButton = ({
  children,
  ariaLabel,
  variant = "filled",
  size = "lg",
  color,
  onClick,
  isIconOnly = false,
  isSubmit = false,
  ...defaultProps
}: IproButtonProps) => {
  const ButtonComponent = (submitProps: SubmitButtonProps) => (
    <Button
      variant={variant}
      classNames={classes}
      c={color}
      aria-label={ariaLabel}
      h={getHeight(size)}
      px={isIconOnly ? 7 : undefined}
      onClick={onClick}
      style={{ ...defaultProps.style }}
      loaderProps={{ type: "dots" }}
      {...defaultProps}
      {...submitProps}
    >
      {children}
    </Button>
  );

  if (isSubmit) {
    return <IproSubmitButton btn={ButtonComponent} />;
  }

  return <ButtonComponent />;
};

export default IproButton;
