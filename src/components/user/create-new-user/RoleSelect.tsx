import { useEffect, useState } from "react";
import { ComboboxData, ComboboxItem, Grid, GridCol } from "@mantine/core";

import IproSelect from "@/components/core/IproSelect";
import { getFormattedError } from "@/utils/format-error";
import { capitalizeFirstLetter, showErrorNotification } from "@/utils/functions";
import { getRoleListApi } from "@/lib/services/api/role.service";
import SpecialitySelect from "./SpecialitySelect";

const RoleSelect = () => {
  const [roleOptions, setRoleOptions] = useState<ComboboxData>([]);
  const [roleItem, setRoleItem] = useState<ComboboxItem>();

  const getRoleList = async () => {
    try {
      const result = await getRoleListApi();
      setRoleOptions(
        result.map((item) => ({
          label: capitalizeFirstLetter(item.name),
          value: item.id,
        }))
      );
    } catch (error) {
      const e = getFormattedError(error);
      showErrorNotification(e.errors?.formErrors?.[0]);
    }
  };

  const onRoleChange = (value: string | null) => {
    const [selectedRole] = roleOptions.filter(
      (item) => (item as unknown as ComboboxItem).value === value
    );
    if (value) setRoleItem(selectedRole as ComboboxItem);
  };

  const isTechnicianSelected = () => roleItem?.label === "Technician";

  useEffect(() => {
    getRoleList();
  }, []);

  return (
    <Grid>
      <GridCol span={isTechnicianSelected() ? 6 : 12}>
        <IproSelect
          name="role_id"
          data={roleOptions}
          value={roleItem?.value as (string & string[])}
          onOptionSubmit={onRoleChange}
          label="User Role"
        />
      </GridCol>
      {isTechnicianSelected() && (
        <GridCol span={6}>
          <SpecialitySelect />
        </GridCol>
      )}
    </Grid>
  );
};

export default RoleSelect;
