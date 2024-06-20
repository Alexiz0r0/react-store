import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ProductLocalStorage } from '../../interfaces/ProductLocalStorage.interface';

export interface TotalState {
  total: number;
}

const initialState: TotalState = {
  total: 0,
};

export const totalSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    calculateTotal: (state, action: PayloadAction<ProductLocalStorage[]>) => {
      const total = action.payload.reduce((sum, item) => {
        return sum + item.price * item.stock;
      }, 0);

      state.total = total;
    },
  },
});

// Action creators are generated for each case reducer function
export const { calculateTotal } = totalSlice.actions;
