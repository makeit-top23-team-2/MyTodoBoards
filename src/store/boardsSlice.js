import { createSlice } from '@reduxjs/toolkit';

export const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    value: [],
  },
  reducers: {
    setBoards: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBoards } = boardsSlice.actions;
export default boardsSlice.reducer;
