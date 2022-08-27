import { createSlice } from '@reduxjs/toolkit';

export const columnsSlice = createSlice({
  name: 'columns',
  initialState: {
    value: {},
  },
  reducers: {
    setColumns: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setColumns } = columnsSlice.actions;
export default columnsSlice.reducer;
