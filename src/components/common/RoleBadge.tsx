import { ProfileModel } from "@/lib/models/user.model";
import { colorForUserRole, titleCase } from "@/utils/functions";
import { Badge } from "@mantine/core";

const RoleBadge = ({ user }: { user: ProfileModel }) => {
  return (
    <Badge color={colorForUserRole(user.role.name)} radius="md" size="sm" px={10} pt={10} pb={9}>
      {user.role.name === "technician" && user?.speciality
        ? `${user.role.name}-${user?.speciality.name.split("-")[0]}`
        : titleCase(user.role.name)}
    </Badge>
  );
};

export default RoleBadge;
