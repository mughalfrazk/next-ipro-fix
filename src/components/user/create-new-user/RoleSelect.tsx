import { useEffect, useState } from "react";
import { ComboboxData, ComboboxItem, Grid, GridCol } from "@mantine/core";

import {
  capitalizeFirstLetter,
  showErrorNotification
} from "@/utils/functions";
import { FieldErrorPropsType } from "@/hooks/use-action-errors";
import { getRoleListApi } from "@/lib/services/api/role.service";
import { getFormattedError } from "@/utils/format-error";
import IproSelect from "@/components/core/IproSelect";
import IproTextInput from "@/components/core/IproTextInput";
import SpecialitySelect from "./SpecialitySelect";
import { ProfileModel } from "@/lib/models/user.model";

type RoleSelectProps = {
  user?: ProfileModel;
} & FieldErrorPropsType;

const RoleSelect = ({ user, getFieldErrorProps }: RoleSelectProps) => {
  const [roleOptions, setRoleOptions] = useState<ComboboxData>([]);
  const [roleItem, setRoleItem] = useState<ComboboxItem>();

  const getRoleList = async () => {
    try {
      const result = await getRoleListApi();
      setRoleOptions(
        result.map((item) => ({
          label: capitalizeFirstLetter(item.name),
          value: item.id
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

  useEffect(() => {
    if (user && roleOptions.length) {
      onRoleChange(user.role.id);
    }
  }, [user, roleOptions]);

  return (
    <Grid>
      <GridCol span={isTechnicianSelected() ? 6 : 12}>
        <IproSelect
          name="role_id"
          label="User Role"
          data={roleOptions}
          value={roleItem?.value as string & string[]}
          onOptionSubmit={onRoleChange}
          {...getFieldErrorProps("role_id")}
        />
      </GridCol>
      {isTechnicianSelected() && (
        <GridCol span={6}>
          <SpecialitySelect
            user={user}
            getFieldErrorProps={getFieldErrorProps}
          />
        </GridCol>
      )}
      <IproTextInput
        name="isTechnicianSelected"
        defaultValue={isTechnicianSelected() ? 1 : 0}
        style={{ display: "none" }}
      />
    </Grid>
  );
};

export default RoleSelect;
