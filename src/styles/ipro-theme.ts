"use client";

import {
  CSSVariablesResolver,
  DEFAULT_THEME,
  Loader,
  MantineThemeOverride,
  createTheme,
  mergeMantineTheme,
} from "@mantine/core";
import { CssLoader } from "./CssLoader";
import { generateColors } from "@mantine/colors-generator";

export const iproTheme: MantineThemeOverride = createTheme({
  white: "#FFFFFF",
  black: "#000000",
  colors: {
    // main 7
    // primary: ['#c2e2ff', '#8ccfff40', '#4bb4ff40', '#0f74cc', '', '', '', '#238be6', '', '#238be6'],
    // main 6
    primary: generateColors("#238be6"),
    // main 1
    secondary: ["", "#f8f9fa", "", "", "", "", "", "", "", ""],
    red: generateColors("#e03131"),
  },
  primaryShade: 3,
  primaryColor: "primary",
  defaultRadius: "md",
  cursorType: "pointer",
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "64em",
    lg: "90em",
    xl: "118rem",
    xxl: "148rem",
    xxxl: "164rem",
  },
  other: {
    zIndices: {
      hide: -1,
      auto: "auto",
      base: 0,
      baseOverlay: 5,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
      navOverlay: 1900,
      nav: 2000,
    },
  },
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, custom: CssLoader },
        type: "custom",
      },
    }),
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  dark: {
    "--mantine-color-error": theme.colors.red[2],
    "--mantine-color-red-filled": theme.colors.red[4],
  },
  light: {
    "--mantine-color-red-filled": theme.colors.red[4],
  },
});

/// For use of theme outside of a component
export const themeOutSideComponents = mergeMantineTheme(
  DEFAULT_THEME,
  iproTheme,
);
