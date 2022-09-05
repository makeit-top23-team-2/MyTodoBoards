import { createSlice } from '@reduxjs/toolkit';

export const selectImgBoolSlice = createSlice({
  name: 'selectImgBool',
  initialState: {
    value: false,
  },
  reducers: {
    setSelectImgBool: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { setSelectImgBool } = selectImgBoolSlice.actions;
export default selectImgBoolSlice.reducer;