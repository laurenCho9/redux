import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Counter from "./component/Counter";
import { counterReducer } from "./redux/counter";

const store = configureStore({
  //속성 이름이 상태값의 이름이 된다.
  reducer: {
    counter: counterReducer,
  },
});
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
