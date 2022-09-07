import { createSlice } from '@reduxjs/toolkit';

export const sharedBoardsSlice = createSlice({
  name: 'sharedBoards',
  initialState: {
    value: [],
  },
  reducers: {
    setSharedBoards: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSharedBoards } = sharedBoardsSlice.actions;
export default sharedBoardsSlice.reducer;
