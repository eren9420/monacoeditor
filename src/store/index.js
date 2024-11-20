import { configureStore } from '@reduxjs/toolkit';
import editorReducer from './editorSlice';

const store = configureStore({
  reducer: {
    editor: editorReducer, // editor için oluşturulmuş slice
  },
});

export default store;
