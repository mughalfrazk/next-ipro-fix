import React, { Fragment, useEffect, useState } from "react";
import { Divider, Group, Indicator, Menu, Stack, Text } from "@mantine/core";
import { IconBellRinging2Filled, IconInbox } from "@tabler/icons-react";

import IproButton from "@/components/core/IproButton";
import { useProfileContext } from "@/context/profile.context";
import { useMantineColorScheme } from "@/hooks/use-mantine-color-scheme-wrapper";
import NotificationMenuItem from "./NotificationMenuItem";

const NotificationMenu = () => {
  const {
    loading,
    data: { user_notifications }
  } = useProfileContext();
  const { lightDark } = useMantineColorScheme();

  const [unreadNotificationCount, setUnreadNotificationCount] = useState<number>(0);

  useEffect(() => {
    setUnreadNotificationCount(
      user_notifications.reduce((prev, curr) => prev + (!!curr.is_read ? 0 : 1), 0)
    );
  }, [user_notifications]);

  return (
    <Menu position="bottom-end" shadow="md">
      <Menu.Target>
        <Indicator
          color="red"
          size={20}
          label={unreadNotificationCount}
          disabled={!unreadNotificationCount}
          styles={{
            indicator: { top: "4px", right: "4px" }
          }}
        >
          <IproButton
            variant="light"
            radius="xl"
            isIconOnly
            loading={loading}
            loaderProps={{ type: "oval", speed: 0.3 }}
            color={lightDark("var(--mantine-color-primary-6)", "var(--mantine-color-primary-0)")}
          >
            <IconBellRinging2Filled />
          </IproButton>
        </Indicator>
      </Menu.Target>

      <Menu.Dropdown>
        {!!user_notifications.length ? (
          user_notifications.map((item, idx) => (
            <Fragment key={idx}>
              {idx !== 0 && <Divider mx={10} my={4} />}
              <NotificationMenuItem item={item} />
            </Fragment>
          ))
        ) : (
          <Menu.Item>
            <Group px={20} py={10} align="center" gap={10}>
              <IconInbox size={25} />
              <Text size="md">Inbox is empty</Text>
            </Group>
          </Menu.Item>
        )}
      </Menu.Dropdown>
    </Menu>
  );
};

export default NotificationMenu;
