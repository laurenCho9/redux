import { createSlice, nanoid } from "@reduxjs/toolkit";

// src/redux/todoSlice.js
const todoSlice = createSlice({
  name: "todos",
  initialState: [{ id: 1, text: "redux배우기", done: false }],
  reducers: {
    createTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (text) => {
        return {
          payload: {
            id: nanoid(),
            text,
            done: false,
            createdAt: new Date().toDateString(), //오늘 날짜
          },
        };
      },
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.done = !todo.done;
    },
    removeTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { createTodo, toggleTodo, removeTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
