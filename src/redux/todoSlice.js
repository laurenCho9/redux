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
  },
});

export const { createTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
