"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { Burger, Group } from "@mantine/core";

import { useProfileContext } from "@/context/profile.context";
import { useMantineColorScheme } from "@/hooks/use-mantine-color-scheme-wrapper";
import IproButton from "@/components/core/IproButton";
import IproLogo from "@/components/common/IproLogo";
import RoleBadge from "@/components/common/RoleBadge";
import NotificationMenu from "./NotificationMenu";
import AvatarMenu from "./AvatarMenu";

type HeaderProps = {
  opened: boolean;
  toggle: () => void;
};

const Header = ({ opened, toggle: AppshellToggle }: HeaderProps) => {
  const { data } = useProfileContext();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group h="100%" justify="space-between" px="md">
      <Burger opened={opened} onClick={AppshellToggle} hiddenFrom="sm" size="sm" />
      <IproLogo size={30} variant={colorScheme === "dark" ? "dark" : "light"} />
      <Group gap={10}>
        <RoleBadge user={data} />
        <NotificationMenu />
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
