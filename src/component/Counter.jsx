import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../redux/counter";

function getState(state) {
  return state.counter;
}

// src/component/Counter.jsx
function Counter() {
  //관리되고 있는 여러개의 상태 중에 선택한다.
  //  => 상태값을 선댁하는 콜백함수를 전달한다.
  //  => Selector 함수로는 순수함수가 전달되어야 한다.
  const count = useSelector(getState);
  const dispatch = useDispatch(); //디스패치함수 받아오기.
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increase(10))}>+1</button>
      {/* { type: "DECREASE", amount: 10 } */}
      <button onClick={() => dispatch(decrease(10))}>-1</button>
    </div>
  );
}
export default Counter;
