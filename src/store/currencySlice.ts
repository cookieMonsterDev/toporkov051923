import { selectOptions } from '@/select-options';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Currency {
  label: string;
  value: {
    price: number;
    code: string;
  };
}

export interface CounterState {
  currency: Currency
}

const initialState: CounterState = {
  currency: selectOptions[0],
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<Currency>) => {
      state.currency = action.payload
    },
  },
})

export const { setCurrency } = currencySlice.actions
export default currencySlice.reducer