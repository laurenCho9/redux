import { nanoid } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = [
  { id: 1, text: "리덕스 배우기", done: true },
  { id: 2, text: "리덕스 응용하기", done: false },
  { id: 3, text: "리덕스로 투두리스트 만들기", done: false },
];

const CREATE = "CREATE";
const REMOVE = "REMOVE";
const TOGGLE = "TOGGLE";

// 액션 객체 생성 함수
export const toggleTodo = (id) => {
  return { type: TOGGLE, id };
};

//삭제버튼(위와 거의 동일)
export const removeTodo = (id) => {
  return { type: REMOVE, id };
};

//등록버튼
export const createTodo = (text) => {
  return { type: CREATE, id: nanoid(), text };
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      //immer에서 제공하는 produce 함수를 사용하면 불변성을 신경쓰지 않아도 된다.
      return produce(state, (draft) => {
        draft.push({ id: action.id, text: action.text, done: false });
      });
    case TOGGLE:
      return produce(state, (draft) => {
        const todo = draft.find((todo) => todo.id === action.id);
        todo.done = !todo.done;
      });
    case REMOVE:
      //객체 하나만 지우는 경우 원본을  변경하는 방식보다 filter가 간단하다.
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}
