import { useEffect, useState } from "react";
import { ComboboxData, ComboboxItem } from "@mantine/core";

import { getProblemTypeListApi } from "@/lib/services/api/problem-type.service";
import { FieldErrorPropsType } from "@/hooks/use-action-errors";
import { getFormattedError } from "@/utils/format-error";
import { showErrorNotification } from "@/utils/functions";
import IproSelect from "@/components/core/IproSelect";
import { ProfileModel } from "@/lib/models/user.model";

type SpecialitySelectProps = {
  user?: ProfileModel;
} & FieldErrorPropsType;

const SpecialitySelect = ({
  user,
  getFieldErrorProps
}: SpecialitySelectProps) => {
  const [specialityOptions, setSpecialityOptions] = useState<ComboboxData>([]);
  const [specialityItem, setSpecialityItem] = useState<ComboboxItem>();

  const getSpecialityList = async () => {
    try {
      const result = await getProblemTypeListApi();
      setSpecialityOptions(
        result.map((item) => ({
          label: item.name,
          value: item.id
        }))
      );
    } catch (error) {
      const e = getFormattedError(error);
      showErrorNotification(e.errors?.formErrors?.[0]);
    }
  };

  const onSpecialityChange = (value: string | null) => {
    const [selectedSpeciality] = specialityOptions.filter(
      (item) => (item as unknown as ComboboxItem).value === value
    );
    if (value) setSpecialityItem(selectedSpeciality as ComboboxItem);
  };

  useEffect(() => {
    getSpecialityList();
  }, []);

  useEffect(() => {
    if (user && specialityOptions.length && user?.speciality) {
      onSpecialityChange(user.speciality.id);
    }
  }, [user, specialityOptions]);

  return (
    <IproSelect
      name="speciality_id"
      label="Speciality"
      data={specialityOptions}
      value={specialityItem?.value as string & string[]}
      onOptionSubmit={onSpecialityChange}
      {...getFieldErrorProps("speciality_id")}
    />
  );
};

export default SpecialitySelect;
