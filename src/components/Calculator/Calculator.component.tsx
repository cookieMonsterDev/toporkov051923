import { useState } from "react";
import { useAppSelector } from "@/store";
import { Container } from "./Calculator.styled";
import { TextField } from "@mui/material";

export const CalculatorComponent: React.FC = () => {
  const { currency } = useAppSelector((state) => state.currency);
  const [amount, setAmount] = useState(5);

  const handleItemPrice = () => {
    return amount * (10 * currency.value.price);
  };

  return (
    <Container>
      <TextField
        label="Amount"
        variant="outlined"
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <TextField
        label="Price"
        variant="outlined"
        value={handleItemPrice()}
        disabled
      />
    </Container>
  );
};
