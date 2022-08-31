import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    value: {},
  },
  reducers: {
    setCards: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCards } = cardsSlice.actions;
export default cardsSlice.reducer;
