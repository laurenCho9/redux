import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";
import produce from "immer";

// src/redux/todos_toolkit.js
export const createTodo = createAction("todos/create", function prepare(text) {
  return {
    payload: {
      id: nanoid(),
      text,
      done: false,
    },
  };
});
//값이 하나여서 id값 그대로 쓰면 된다. 지우는 건 프리페어함수 필요없음
export const removeTodo = createAction("todos/remove");
export const toggleTodo = createAction("todos/toggle");

export const TodoReducer = createReducer([], (builder) => {
  builder
    .addCase(createTodo, (state, action) => {
      // immer 가 자동으로 적용되어 있다.
      state.push(action.payload);
    })
    .addCase(toggleTodo, (state, action) => {
      //   const todo = state[action.payload.index];
      //   todo.completed = !todo.completed;
      const todo = state.find((todo) => todo.id === action.payload);
      todo.done = !todo.done;
    })
    .addCase(removeTodo, (state, action) => {
      // 해당 아이디의 TODO의 INDEX값 구해서 splice로 원본에서 추출
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    });
});

// createAction : 액션의 타입과 액션 생성 함수를 동시에 만든다.
//  => 함수를 실행하면 인자는 payload 라는 값으로, 타입은 자동으로 지정된다.
//  => 첫번째 인자는 고유한 키값(타입 값)
//  => 두번째는 전달받은 payload 값을 통해 새로운 객체를 생성할 수 있는 prepare 함수 전달.(prepare프리페어는 익명함수라 안써도 돌아간다. )
export function todoToolkitReducer(state = [], action) {
  switch (action.type) {
    case createTodo.type:
      //immer에서 제공하는 produce 함수를 사용하면 불변성을 신경쓰지 않아도 된다.
      return produce(state, (draft) => {
        draft.push(action.payload);
      });
    case toggleTodo.type:
      return produce(state, (draft) => {
        //불변성을 신경쓰지 않아도 되서 찾아서 done 값을 직접 변경.
        const todo = draft.find((todo) => todo.id === action.payload);
        todo.done = !todo.done;
      });
    case removeTodo.type:
      //객체 하나만 지우는 경우 원본을  변경하는 방식보다 filter가 간단하다.
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}
