import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import boardsReducer from './boardsSlice';
import columnsReducer from './columnsSlice';
import singleBoardReducer from './singleBoardSlice';

export default configureStore({
  reducer: {
    profile: profileReducer,
    boards: boardsReducer,
    singleBoard: singleBoardReducer,
    columns: columnsReducer,
  },
});
