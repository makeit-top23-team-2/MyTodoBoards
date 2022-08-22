import { createSlice } from '@reduxjs/toolkit';

export const namesSlice = createSlice({
  name:'names',
  initialState: {
    value: [],
  },
  reducers:{
    add: (state, action) => {
      state.value.push(action.payload);
    }
  }
})

export const { add } = namesSlice.actions;

export default namesSlice.reducer;