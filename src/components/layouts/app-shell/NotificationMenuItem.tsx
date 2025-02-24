import React, { useEffect, useState } from "react";
import { IconAlertSquareRoundedFilled, IconMessageFilled } from "@tabler/icons-react";
import { Avatar, Group, Indicator, Menu, Stack, Text } from "@mantine/core";

import { UserNotificationModel } from "@/lib/models/user-notification.model";
import { showDateNicely, showErrorNotification } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { updateNotificationReadApi } from "@/lib/services/api/user-notification.service";
import { getFormattedError } from "@/utils/format-error";
import { useProfileContext } from "@/context/profile.context";

const NotificationMenuItem = ({ item }: { item: UserNotificationModel }) => {
  const router = useRouter();
  const { updateProfile } = useProfileContext();

  const notificationClickHandler = async () => {
    try {
      await updateNotificationReadApi(item.id);
      if (item.notification.type === "comment") {
        if (!item.is_read) updateProfile();
        router.push(`/dashboard/job/${item.notification.type_id}?tab=comment`);
        router.refresh();
      }
    } catch (error) {
      showErrorNotification(getFormattedError(error)?.errors?.formErrors?.[0]);
      console.log(error);
    }

    if (item.notification.type === "comment") {
      router.push(`/dashboard/job/${item.notification.type_id}?tab=comment`);
      router.refresh();
    }
  };

  return (
    <Menu.Item component="button" onClick={notificationClickHandler}>
      <Group py={4} pe={6} gap={6} opacity={item.is_read ? 0.8 : 1}>
        <Indicator
          color="yellow.6"
          size={12}
          styles={{
            indicator: { top: "8px", right: "8px" }
          }}
          disabled={item.is_read}
        >
          <Avatar size="lg" color="primary.6">
            {item.notification.type === "comment" ? (
              <IconMessageFilled size={30} />
            ) : (
              <IconAlertSquareRoundedFilled size={30} />
            )}
          </Avatar>
        </Indicator>
        <Stack gap={2} p={6}>
          <Group gap={4}>
            <Text>{`${item.notification.description} by`}</Text>
            <Text fw="bold">{`${item.notification.triggerer.first_name} ${item.notification.triggerer.last_name}`}</Text>
          </Group>
          <Text size="sm" fw="bold" opacity={0.4}>
            {showDateNicely(item.created_at)}
          </Text>
        </Stack>
      </Group>
    </Menu.Item>
  );
};

export default NotificationMenuItem;
