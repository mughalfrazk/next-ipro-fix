import { useMantineTheme } from "@mantine/core"

/// Reference src/styles/iproTheme.ts for clarity on where these values originate
export const useZIndex = () => {
  const iproTheme = useMantineTheme()
  return {
    hide: iproTheme.other.zIndices.hide,
    auto: iproTheme.other.zIndices.auto,
    base: iproTheme.other.zIndices.base,
    baseOverlay: iproTheme.other.zIndices.baseOverlay,
    docked: iproTheme.other.zIndices.docked,
    dropdown: iproTheme.other.zIndices.dropdown,
    sticky: iproTheme.other.zIndices.sticky,
    banner: iproTheme.other.zIndices.banner,
    overlay: iproTheme.other.zIndices.overlay,
    modal: iproTheme.other.zIndices.modal,
    popover: iproTheme.other.zIndices.popover,
    skipLink: iproTheme.other.zIndices.skipLink,
    toast: iproTheme.other.zIndices.toast,
    tooltip: iproTheme.other.zIndices.tooltip,
    navOverlay: iproTheme.other.zIndices.navOverlay,
    nav: iproTheme.other.zIndices.nav,
  }
}
