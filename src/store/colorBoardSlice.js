import { createSlice } from '@reduxjs/toolkit';

export const colorBoardSlice = createSlice({
  name: 'colorBoard',
  initialState: {
    value: 'https://res.cloudinary.com/davpin/image/upload/v1662170583/fondo-trello_odps0n.png',
  },
  reducers: {
    setColorBoard: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { setColorBoard } = colorBoardSlice.actions;
export default colorBoardSlice.reducer;
