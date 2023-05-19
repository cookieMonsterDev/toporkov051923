import { useState } from "react";
import { SelectProps } from "./Select.types";
import { MySelect, MyMenuItem } from "./Select.styled";

export const SelectComponent: React.FC<SelectProps> = ({ list }) => {
  const [value, setValue] = useState(list[0].value.price);

  const handleChange = (event: any) => {
    setValue(Number(event.target.value));
  };

  return (
    <MySelect value={value} onChange={handleChange}>
      {list.map((e) => (
        <MyMenuItem key={e.label} value={e.value.price}>
          {e.label}
        </MyMenuItem>
      ))}
    </MySelect>
  );
};
