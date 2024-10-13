"use client";

import { useEffect, useState } from "react";
import { getTechniciansApi } from "@/lib/services/api/user.service";
import { ComboboxData } from "@mantine/core";
import IproSelect from "@/components/core/IproSelect";

const TechnicianSelect = () => {
  const [technicianOptions, setTechnicianOptions] = useState<ComboboxData>([]);

  const getTechniciansList = async () => {
    try {
      const result = await getTechniciansApi();
      setTechnicianOptions(
        result.map((item) => ({
          label: `${item.first_name} ${item.last_name}`,
          value: item.id,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTechniciansList();
  }, []);

  return (
    <IproSelect
      size="md"
      label="Staff Member"
      name="technician_id"
      data={technicianOptions}
      styles={{
        label: {
          color: "white",
        },
        input: {
          backgroundColor: "transparent",
          borderColor: "white",
          color: "white",
        },
      }}
    />
  );
};

export default TechnicianSelect;
