"use client";

import { ReactNode, useEffect } from "react";
import { AppShell, ScrollArea, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Header from "./Header";
import Navlinks from "./Navlinks";
import Footer from "./Footer";
import { useMantineColorScheme } from "@/app/hooks/use-mantine-color-scheme-wrapper";

const AppShellLayout = ({ children }: { children: ReactNode }) => {
  const theme = useMantineTheme();
  const { colorScheme, getColorsByTheme } = useMantineColorScheme();
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header withBorder={false}>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>
      <AppShell.Navbar withBorder={false}>
        <AppShell.Section grow mb="md" component={ScrollArea}>
          <Navlinks />
        </AppShell.Section>
        <AppShell.Section>
          <Footer />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main
        bg={getColorsByTheme({
          light: theme.colors.gray[2],
          dark: theme.black,
        })}
      >
        {children}
      </AppShell.Main>
    </AppShell>
  );
};

export default AppShellLayout;
