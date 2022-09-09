import { createSlice } from '@reduxjs/toolkit';

export const singleCardSlice = createSlice({
  name: 'SingleCard',
  initialState: {
    value: {},
  },
  reducers: {
    setSingleCard: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSingleCard } = singleCardSlice.actions;
export default singleCardSlice.reducer;
