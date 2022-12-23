import { configureStore } from '@reduxjs/toolkit';
import todoList from './todoList';

// Redux store

export const store = configureStore({
  reducer: {
    todoReducer: todoList
  },
});
