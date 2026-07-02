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
import { RoleTypes } from "@/types/roles.types";
import { useProfileContext } from "@/context/profile.context";

type RoleSelectProps = {
  user?: ProfileModel;
} & FieldErrorPropsType;

const RoleSelect = ({ user, getFieldErrorProps }: RoleSelectProps) => {
  const { data: currentUser } = useProfileContext();
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
            disabled={
              ![RoleTypes.SUPER_ADMIN, RoleTypes.ADMIN].includes(
                currentUser?.role?.name?.toLowerCase() ?? ""
              )
            }
            {...getFieldErrorProps("target")}
          />
        </GridCol>
      )}
      {/* Preserve the current progress on update — it is auto-calculated, not
          admin-editable, so submit it as a hidden field to avoid it being reset. */}
      {isTechnician && <input type="hidden" name="progress" defaultValue={user?.progress ?? 0} />}
      <input name="isTechnicianSelected" value={isTechnician ? 1 : 0} onChange={() => {}} hidden />
    </Grid>
  );
};

export default RoleSelect;
