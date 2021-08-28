import { configureStore } from '@reduxjs/toolkit';
import {tasksSlice} from './taskSlice'
import { humansSlice } from './humanSlice';
export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    humans: humansSlice.reducer
  }
});
