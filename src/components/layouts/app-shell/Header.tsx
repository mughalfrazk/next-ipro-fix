"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { Burger, Group } from "@mantine/core";

import { useMantineColorScheme } from "@/hooks/use-mantine-color-scheme-wrapper";
import IproButton from "@/components/core/IproButton";
import AvatarMenu from "./AvatarMenu";
import RoleBadge from "@/components/common/RoleBadge";
import { useProfileContext } from "@/context/profile.context";

type HeaderProps = {
  opened: boolean;
  toggle: () => void;
};

const Header = ({ opened, toggle: AppshellToggle }: HeaderProps) => {
  const { data } = useProfileContext()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group h="100%" justify="space-between" px="md">
      <Burger opened={opened} onClick={AppshellToggle} hiddenFrom="sm" size="sm" />
      <h2>Logo</h2>
      <Group gap={10}>
        <RoleBadge user={data} />
        <IproButton variant="light" radius="xl" isIconOnly onClick={toggleColorScheme}>
          {colorScheme === "dark" ? (
            <IconSun color="var(--mantine-color-primary-0)" />
          ) : (
            <IconMoon color="var(--mantine-color-primary-6)" />
          )}
        </IproButton>
        <AvatarMenu />
      </Group>
    </Group>
  );
};

export default Header;
