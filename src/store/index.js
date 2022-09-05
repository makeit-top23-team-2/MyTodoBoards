import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import boardsReducer from './boardsSlice';
import columnsReducer from './columnsSlice';
import singleBoardReducer from './singleBoardSlice';
import cardsReducer from './cardsSlice';
import colorBoardReducer from './colorBoardSlice';
import selectImgBoolReducer from './selectImgBoolSlice';


export default configureStore({
  reducer: {
    profile: profileReducer,
    boards: boardsReducer,
    singleBoard: singleBoardReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    colorBoard: colorBoardReducer,
    selectImgBool: selectImgBoolReducer,

  },
});
