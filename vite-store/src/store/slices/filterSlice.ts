import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  value: string;
}

const initialState: FilterState = {
  value: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getText: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getText } = filterSlice.actions;
