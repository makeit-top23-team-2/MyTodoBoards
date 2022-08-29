import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import boardsReducer from './boardsSlice';
import columnsReducer from './columnsSlice';
import singleBoardReducer from './singleBoardSlice';
import cardsReducer from './cardsSlice';
import tasksReducer from './checklistSlice';

export default configureStore({
  reducer: {
    profile: profileReducer,
    tasks: tasksReducer,
    boards: boardsReducer,
    singleBoard: singleBoardReducer,
    columns: columnsReducer,
    cards: cardsReducer,
  },
});
