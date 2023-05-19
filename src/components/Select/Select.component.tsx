import { useState, useEffect } from "react";
import { SelectProps } from "./Select.types";
import { MySelect, MyMenuItem, MyImg } from "./Select.styled";
import { useAppDispatch, useAppSelector } from "@/store";
import { setCurrency } from "@/store/currencySlice";

export const SelectComponent: React.FC<SelectProps> = ({ list }) => {
  const { currency } = useAppSelector((state) => state.currency);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(currency.value.price);

  useEffect(() => {
    setValue(currency.value.price);
  }, [currency]);

  const handleChange = (event: any) => {
    setValue(Number(event.target.value));
    const cur = list.filter((e) => e.value.price === event.target.value)[0];
    dispatch(setCurrency(cur));
  };

  return (
    <MySelect
      value={value}
      onChange={handleChange}
      MenuProps={{
        PaperProps: {
          sx: {
            bgcolor: "var(--primary)",
            "& .Mui-selected": {
              color: "var(--secondary)",
            },
          },
        },
      }}
    >
      {list.map((e) => (
        <MyMenuItem key={e.label} value={e.value.price}>
          <MyImg
            src={`/${e.label.toLowerCase()}.png`}
            width={20}
            height={20}
            alt={"curr logo"}
          />
          {e.label}
        </MyMenuItem>
      ))}
    </MySelect>
  );
};
