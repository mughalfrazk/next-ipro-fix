import { logoutAction } from "@/lib/actions/auth.action";
import { Avatar, Menu, rem } from "@mantine/core";
import { IconLogout2, IconUserCircle } from "@tabler/icons-react";

const AvatarMenu = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Avatar src="https://cdn-icons-png.flaticon.com/512/147/147131.png" />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <IconUserCircle style={{ width: rem(17), height: rem(17) }} />
          }
        >
          Profile
        </Menu.Item>
        <form action={logoutAction}>
          <Menu.Item
            type="submit"
            color="red"
            leftSection={
              <IconLogout2 style={{ width: rem(16), height: rem(16) }} />
            }
          >
            Logout
          </Menu.Item>
        </form>
      </Menu.Dropdown>
    </Menu>
  );
};

export default AvatarMenu;
