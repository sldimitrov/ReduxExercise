import { createStore } from "redux";

const initialState = { counter: 0, toggle: false };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      toggle: state.toggle,
    };
  }

  if (action.type === "incrementBy5") {
    return {
      counter: state.counter + action.value,
      toggle: state.toggle,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      toggle: state.toggle,
    };
  }

  if (action.type === "toggle") {
    return {
      toggle: !state.toggle,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
