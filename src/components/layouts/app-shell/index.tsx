"use client";

import { ReactNode } from "react";
import { AppShell, ScrollArea, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Header from "./Header";
import Navlinks from "./Navlinks";
import Footer from "./Footer";
import { useMantineColorScheme } from "@/hooks/use-mantine-color-scheme-wrapper";

const AppShellLayout = ({ children }: { children: ReactNode }) => {
  const theme = useMantineTheme();
  const { lightDark } = useMantineColorScheme();
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
      <AppShell.Main bg={lightDark(theme.colors.gray[0], theme.black)}>{children}</AppShell.Main>
    </AppShell>
  );
};

export default AppShellLayout;
