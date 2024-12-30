"use client";

import { useEffect, useState } from "react";
import { getUserListByRoleApi } from "@/lib/services/api/user.service";
import { Combobox, Input, InputBase, useCombobox } from "@mantine/core";

import { titleCase } from "@/utils/functions";
import { FieldErrorPropsType } from "@/hooks/use-action-errors";
import { UserByRoleType, UserModel } from "@/lib/models/user.model";
import IproTextInput from "@/components/core/IproTextInput";

type TechnicianSelectProps = {
  technician: UserModel | undefined | null;
} & FieldErrorPropsType;

const TechnicianSelect = ({ technician, getFieldErrorProps }: TechnicianSelectProps) => {
  const [technicianOptions, setTechnicianOptions] = useState<UserByRoleType>([]);
  const [selectUserName, setSelectedUserName] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const getTechniciansList = async () => {
    const data = await getUserListByRoleApi();
    setTechnicianOptions(data);
  };

  useEffect(() => {
    getTechniciansList();
  }, []);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption()
  });

  useEffect(() => {
    technicianOptions.map((i) =>
      i.user.map((j) =>
        j.id === value ? setSelectedUserName(`${j.first_name} ${j.last_name}`) : ""
      )
    );
  }, [value]);

  useEffect(() => {
    if (!!technician) {
      setValue(technician?.id);
      setSelectedUserName(`${technician.first_name} ${technician.last_name}`);
    }
  }, [technician]);

  return (
    <>
      <IproTextInput name="technician_id" value={value} onChange={() => {}} display="none" />
      <Combobox
        store={combobox}
        position="bottom"
        withinPortal={true}
        onOptionSubmit={(val) => {
          setValue(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <InputBase
            type="button"
            component="button"
            label="Staff Member"
            rightSection={<Combobox.Chevron />}
            onClick={() => combobox.toggleDropdown()}
            rightSectionPointerEvents="none"
            {...getFieldErrorProps("technician_id")}
            size="md"
            pointer
            styles={{
              label: {
                color: "white"
              },
              input: {
                backgroundColor: "transparent",
                borderColor: "white",
                color: "white"
              }
            }}
          >
            {selectUserName || <Input.Placeholder c="white">Pick value</Input.Placeholder>}
          </InputBase>
        </Combobox.Target>

        <Combobox.Dropdown h={200} style={{ overflowY: "auto" }}>
          <Combobox.Options>
            {technicianOptions.map((item) => (
              <Combobox.Group key={item.id} label={titleCase(item.name)}>
                {item.user.map((j) => (
                  <Combobox.Option
                    key={j.id}
                    value={j.id}
                  >{`${j.first_name} ${j.last_name}`}</Combobox.Option>
                ))}
              </Combobox.Group>
            ))}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
};

export default TechnicianSelect;
