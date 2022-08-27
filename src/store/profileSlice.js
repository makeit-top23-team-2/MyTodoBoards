import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    value: JSON.parse(localStorage.getItem('profile')),
  },
  reducers: {
    setProfile: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
