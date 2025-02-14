"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getUserListByRoleApi } from "@/lib/services/api/user.service";
import { Combobox, Input, InputBase, useCombobox } from "@mantine/core";

import { UserByRoleType, UserModel } from "@/lib/models/user.model";
import IproTextInput from "@/components/core/IproTextInput";
import { titleCase } from "@/utils/functions";

type StaffSelectProps = {
  staff: UserModel | undefined | null;
  setSelectedStaff?: Dispatch<SetStateAction<string>>;
};

const StaffSelect = ({ staff, setSelectedStaff }: StaffSelectProps) => {
  const [technicianOptions, setStaffOptions] = useState<UserByRoleType>([]);
  const [selectUserName, setSelectedUserName] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const getStaffsList = async () => {
    const data = await getUserListByRoleApi();
    setStaffOptions(data);
  };

  useEffect(() => {
    getStaffsList();
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
    if (!!staff) {
      setValue(staff?.id);
      setSelectedUserName(`${staff.first_name} ${staff.last_name}`);
    }
  }, [staff]);

  return (
    <>
      <IproTextInput name="technician_id" value={value} onChange={() => {}} display="none" />
      <Combobox
        store={combobox}
        position="bottom"
        withinPortal={true}
        onOptionSubmit={(val) => {
          setValue(val);
          if (setSelectedStaff) setSelectedStaff(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <InputBase
            type="button"
            component="button"
            label="Select Staff Member"
            rightSection={<Combobox.Chevron />}
            onClick={() => combobox.toggleDropdown()}
            rightSectionPointerEvents="none"
            size="md"
            pointer
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

export default StaffSelect;
