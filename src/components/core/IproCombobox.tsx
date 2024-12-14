import { Dispatch, SetStateAction, useState } from "react";
import { CheckIcon, Combobox, Group, Pill, PillsInput, useCombobox } from "@mantine/core";

export type IproComboboxItem = {
  label: string;
  value: string;
  data?: unknown;
};

const IproCombobox = ({
  label = "Combobox",
  size = "sm",
  data = [],
  value,
  setValue
}: {
  label?: string;
  size?: string;
  data?: IproComboboxItem[];
  value: IproComboboxItem[];
  setValue: Dispatch<SetStateAction<IproComboboxItem[]>>;
}) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex("active")
  });

  const [search, setSearch] = useState("");

  const handleValueSelect = (val: string) => {
    const selectedVal = data.find((i) => i.value === val);
    const alreadySelected = !!value.find((i) => i.value === val);

    setValue(
      alreadySelected
        ? value.filter((v) => v.value !== val)
        : ([...value, selectedVal] as IproComboboxItem[])
    );
  };

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v.value !== val));

  const values = value.map((item) => (
    <Pill key={item.value} withRemoveButton onRemove={() => handleValueRemove(item.value)}>
      {item.label}
    </Pill>
  ));

  const options = data
    .filter((item) => item.label.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item.value} key={item.value} active={value.includes(item)}>
        <Group gap="sm">
          {value.includes(item) ? <CheckIcon size={12} /> : null}
          <span>{item.label}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox
      store={combobox}
      position="bottom"
      withinPortal={true}
      onOptionSubmit={(value) => handleValueSelect(value)}
      middlewares={{ flip: false, shift: false }}
    >
      <Combobox.DropdownTarget>
        <PillsInput label={label} size={size} onClick={() => combobox.openDropdown()}>
          <Pill.Group>
            {values}

            <Combobox.EventsTarget>
              <PillsInput.Field
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                value={search}
                placeholder="Search values"
                onChange={(event) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Backspace" && search.length === 0) {
                    event.preventDefault();
                    handleValueRemove(value[value.length - 1].value);
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found...</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default IproCombobox;
