import { useEffect, useState } from "react";
import { ComboboxData, ComboboxItem } from "@mantine/core";

import IproSelect from "@/components/core/IproSelect";
import { getProblemTypeListApi } from "@/lib/services/api/problem-type.service";
import { getFormattedError } from "@/utils/format-error";
import { showErrorNotification } from "@/utils/functions";

const SpecialitySelect = () => {
  const [specialityOptions, setSpecialityOptions] = useState<ComboboxData>([]);
  const [specialityItem, setSpecialityItem] = useState<ComboboxItem>();

  const getSpecialityList = async () => {
    try {
      const result = await getProblemTypeListApi();
      setSpecialityOptions(
        result.map((item) => ({
          label: item.name,
          value: item.id,
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

  return (
    <IproSelect
      name="speciality_id"
      data={specialityOptions}
      value={specialityItem?.value as string & string[]}
      onOptionSubmit={onSpecialityChange}
      label="Speciality"
    />
  );
};

export default SpecialitySelect;
