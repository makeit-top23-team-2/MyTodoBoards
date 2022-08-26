import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import boardReducer from './boardSlice';

export default configureStore({
  reducer: {
    profile: profileReducer,
    board: boardReducer,
  },
});
