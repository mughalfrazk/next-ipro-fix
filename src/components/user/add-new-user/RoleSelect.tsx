import { useEffect, useState } from "react";
import { ComboboxData, ComboboxItem, Grid, GridCol } from "@mantine/core";

import { capitalizeFirstLetter, showErrorNotification } from "@/utils/functions";
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
  const [isTechnician, setIsTechnician] = useState<boolean>(false);

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

  useEffect(() => {
    getRoleList();
  }, []);

  useEffect(() => {
    if (user && user.role && roleOptions.length) {
      onRoleChange(user.role.id);
    }
  }, [user, roleOptions]);

  useEffect(() => {
    if (roleItem?.label === "Technician") setIsTechnician(true);
    else setIsTechnician(false);
  }, [roleItem?.label]);

  return (
    <Grid>
      <GridCol span={isTechnician ? 4 : 12}>
        <IproSelect
          name="role_id"
          label="User Role"
          data={roleOptions}
          value={roleItem?.value as string & string[]}
          onOptionSubmit={onRoleChange}
          readOnly={!!user}
          {...getFieldErrorProps("role_id")}
        />
      </GridCol>
      {isTechnician && (
        <GridCol span={4}>
          <SpecialitySelect user={user} getFieldErrorProps={getFieldErrorProps} />
        </GridCol>
      )}
      {isTechnician && (
        <GridCol span={4}>
          <IproTextInput
            type="number"
            name="target"
            label="Assign Target"
            defaultValue={user?.target ?? 0}
            readOnly={!!user}
            {...getFieldErrorProps("target")}
          />
        </GridCol>
      )}
      <input name="isTechnicianSelected" value={isTechnician ? 1 : 0} onChange={() => {}} hidden />
    </Grid>
  );
};

export default RoleSelect;
