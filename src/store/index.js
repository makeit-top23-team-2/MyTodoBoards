import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import boardsReducer from './boardsSlice';
import columnsReducer from './columnsSlice';
import singleBoardReducer from './singleBoardSlice';
import cardsReducer from './cardsSlice';

export default configureStore({
  reducer: {
    profile: profileReducer,    
    boards: boardsReducer,
    singleBoard: singleBoardReducer,
    columns: columnsReducer,
    cards: cardsReducer,
  },
});
