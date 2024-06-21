import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface QytItemState {
  value: number;
}

const initialState: QytItemState = {
  value: 0,
};

export const qytSlice = createSlice({
  name: 'qytItem',
  initialState,
  reducers: {
    getQyt: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getQyt } = qytSlice.actions;
