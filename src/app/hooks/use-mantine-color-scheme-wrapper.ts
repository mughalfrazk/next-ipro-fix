"use client"

import { useEffect, useState } from "react";
import { useMantineColorScheme as useMantineColorSchemeCore } from "@mantine/core";

/**
 * This hook is just a wrapper on top of `useMantineColorSchemeCore` to update the 
 * theme after the client component is loaded and to avoid `Hydration failed because the initial UI`.
 * 
 * https://stackoverflow.com/a/74580510/13229626
 *  */

export const useMantineColorScheme = () => {
  const theme = useMantineColorSchemeCore()
  const [colorScheme, setColorScheme] = useState<string>("")

  useEffect(() => {
    setColorScheme(theme.colorScheme)
  }, [theme.colorScheme])

  const getColorsByTheme = (value: { dark: string; light: string; }): string => {
    const dark = value.dark ?? value.light
    const light = value.light ?? value.dark

    return colorScheme === "dark" ? dark : light
  }

  return { colorScheme, toggleColorScheme: theme.toggleColorScheme, getColorsByTheme }
}