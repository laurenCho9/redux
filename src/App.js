import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Todos from "./component/Todos";
import { counterReducer } from "./redux/counter";
import { todoReducer } from "./redux/todos";
import { todoToolkitReducer } from "./redux/todos_toolkit";

const store = configureStore({
  //속성 이름이 상태값의 이름이 된다.
  reducer: {
    counter: counterReducer,
    todos: todoToolkitReducer,
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
