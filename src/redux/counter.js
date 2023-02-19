// 상태값 0, 더하기, 빼기 리듀서 함수 작성해보기
export function counterReducer(state = 0, action) {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
}
