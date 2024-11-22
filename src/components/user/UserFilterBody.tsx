import { Text, Stack, Grid, MultiSelect } from "@mantine/core";
import IproButton from "@/components/core/IproButton";

const UserFilterBody = () => {
  return (
    <Stack>
      <Text size="sm">You can filter the users by their roles</Text>
      <MultiSelect
        label="User Roles"
        placeholder="Select User Roles to Filter"
        data={["Admin", "Accountant", "Receptionist", "Technicians", "Technicians HW", "Technicians SW", "Technicians GW", "Technicians AW", "Staff"]}
        defaultValue={["All"]}
        clearable
      />
      <Stack align="start">
        <IproButton>Apply Filter</IproButton>
      </Stack>
    </Stack>
  );
};

export default UserFilterBody;
