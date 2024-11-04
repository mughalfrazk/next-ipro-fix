'use client'

import { useEffect, useState } from "react";
import { getTechniciansApi } from "@/lib/services/api/user.service";
import { ComboboxData, ComboboxItem } from "@mantine/core";

import IproSelect from "@/components/core/IproSelect";
import { showErrorNotification } from "@/utils/functions";
import { getFormattedError } from "@/utils/format-error";
import { FieldErrorPropsType } from "@/hooks/use-action-errors";
import { UserModel } from "@/lib/models/user.model";

type TechnicianSelectProps = {
  technician: UserModel | undefined | null;
} & FieldErrorPropsType;

const TechnicianSelect = ({
  technician,
  getFieldErrorProps,
}: TechnicianSelectProps) => {
  const [technicianItem, setTechnicianItem] = useState<ComboboxItem>();
  const [technicianOptions, setTechnicianOptions] = useState<ComboboxData>([]);

  const getTechniciansList = async () => {
    try {
      const result = await getTechniciansApi()
      setTechnicianOptions(
        result.map((item) => ({
          label: `${item.first_name} ${item.last_name}`,
          value: item.id,
        })),
      )
    } catch (error) {
      const e = getFormattedError(error)
      showErrorNotification(e.errors?.formErrors?.[0])
    }
  };

  const onTechnicianChange = (value: string | null) => {
    const [selectedTechnician] = technicianOptions.filter((item) => (item as unknown as ComboboxItem).value === value);
    if (value) setTechnicianItem(selectedTechnician as ComboboxItem);
  };

  useEffect(() => {
    getTechniciansList();
  }, []);

  useEffect(() => {
    if (technician && technicianOptions.length) {
      onTechnicianChange(technician.id);
    }
  }, [technician, technicianOptions]);

  return (
    <IproSelect
      size="md"
      label="Staff Member"
      name="technician_id"
      data={technicianOptions}
      value={technicianItem?.value as string & string[]}
      onOptionSubmit={onTechnicianChange}
      styles={{
        label: {
          color: 'white',
        },
        input: {
          backgroundColor: 'transparent',
          borderColor: 'white',
          color: 'white',
        },
      }}
      {...getFieldErrorProps('technician_id')}
    />
  )
}

export default TechnicianSelect
