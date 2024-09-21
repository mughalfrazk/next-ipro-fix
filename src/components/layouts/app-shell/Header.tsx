"use client";

import { useMantineColorScheme } from "@/app/hooks/use-mantine-color-scheme-wrapper";
import IproButton from "@/components/core/IproButton";
import { Avatar, Burger, Group } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";

type HeaderProps = {
  opened: boolean;
  toggle: () => void;
};

const Header = ({ opened, toggle: AppshellToggle }: HeaderProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <Group h="100%" justify="space-between" px="md">
      <Burger
        opened={opened}
        onClick={AppshellToggle}
        hiddenFrom="sm"
        size="sm"
      />
      <h2>Logo</h2>
      <Group gap={10}>
        <IproButton
          variant="light"
          radius="xl"
          isIconOnly
          onClick={toggleColorScheme}
        >
          {colorScheme === "dark" ? <IconSun /> : <IconMoon />}
        </IproButton>
        <Avatar
          src={"https://cdn-icons-png.flaticon.com/512/147/147131.png"}
        />
      </Group>
    </Group>
  );
};

export default Header;
