import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Todos from "./component/Todos";
import { counterReducer } from "./redux/counter";
import { createTodo, todoReducer } from "./redux/todoSlice";

const store = configureStore({
  //속성 이름이 상태값의 이름이 된다.
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
});
function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}

export default App;
