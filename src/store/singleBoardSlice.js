import { createSlice } from '@reduxjs/toolkit';

export const singleBoardSlice = createSlice({
  name: 'SingleBoard',
  initialState: {
    value: {},
  },
  reducers: {
    setSingleBoard: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSingleBoard } = singleBoardSlice.actions;
export default singleBoardSlice.reducer;
