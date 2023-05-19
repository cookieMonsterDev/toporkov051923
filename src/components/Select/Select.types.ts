export interface SelectProps {
  list: Option[];
}

export interface Option {
  label: string;
  value: {
    price: number;
    code: string;
  };
}
