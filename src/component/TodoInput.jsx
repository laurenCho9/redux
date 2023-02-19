import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todos_toolkit";

function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(text));
    // console.log(createTodo(text));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setText(e.target.value)} type="text" />
        <button>등록</button>
      </form>
    </div>
  );
}
export default TodoInput;
