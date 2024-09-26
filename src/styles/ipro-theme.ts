"use client"

import { DEFAULT_THEME, Loader, MantineThemeOverride, createTheme, mergeMantineTheme } from '@mantine/core'
import { CssLoader } from './CssLoader'

export const iproTheme: MantineThemeOverride = createTheme({
  white: '#FFFFFF',
  black: '#000000',
  colors: {
    // main 7
    primary: ['#f1f5f8', '#238be645', '#238be659', '#0f74cc', '', '', '', '#238be6', '', '#238be6'],
    // main 1
    secondary: ['', '#4d4d4d', '', '', '', '', '', '', '', ''],
    // grey: ['#f1f5f8', '#238be645', '#238be659', '#b3b3b3', '#999999', '', '', '', '', ''],
    red: ['', '', '', '#e03131', '', '', '#e03131', '', '', '',],
  },
  primaryShade: 3,
  primaryColor: 'primary',
  defaultRadius: 'sm',
  cursorType: 'pointer',
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '64em',
    lg: '90em',
    xl: '118rem',
    xxl: '148rem',
    xxxl: '164rem',
  },
  other: {
    zIndices: {
      hide: -1,
      auto: 'auto',
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
        type: 'custom',
      },
    }),
  },
})

/// For use of theme outside of a component
export const themeOutSideComponents = mergeMantineTheme(DEFAULT_THEME, iproTheme)