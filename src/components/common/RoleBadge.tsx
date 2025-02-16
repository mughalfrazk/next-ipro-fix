import { ProfileModel } from "@/lib/models/user.model";
import { colorForUserRole, getRoleNiceName, titleCase } from "@/utils/functions";
import { Badge } from "@mantine/core";

const RoleBadge = ({ user }: { user: ProfileModel }) => {
  return (
    <Badge color={colorForUserRole(user.role.name)} radius="md" size="sm" px={10} pt={10} pb={9}>
      {getRoleNiceName(user)}
    </Badge>
  );
};

export default RoleBadge;
