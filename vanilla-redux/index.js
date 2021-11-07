import { createStore } from "redux";

const $ = (selector) => document.querySelector(selector);

const divToggle = $(".toggle");
const counter = $("h1");
const btnIncrease = $("#increase");
const btnDecrease = $("#decrease");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const toggleSwitch = () => ({
  type: TOGGLE_SWITCH,
});

const increase = (difference = 1) => ({
  type: INCREASE,
  difference,
});

const decrease = () => ({
  type: DECREASE,
});

const initialState = {
  toggle: false,
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

divToggle.onclick = () => store.dispatch(toggleSwitch());
btnIncrease.onclick = () => store.dispatch(increase(1));
btnDecrease.onclick = () => store.dispatch(decrease());

const store = createStore(reducer);

const render = () => {
  const state = store.getState();

  if (state.toggle) divToggle.classList.add("active");
  else divToggle.classList.remove("active");

  counter.textContent = state.counter;
};

render();
store.subscribe(render);
