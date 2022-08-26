import { createSlice } from '@reduxjs/toolkit';

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    value: {},
  },
  reducers: {
    addBoard: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addBoard } = boardSlice.actions;
export default boardSlice.reducer;
