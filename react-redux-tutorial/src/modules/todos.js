const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

let currentId = 3;

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});
export const insert = (text) => ({
  type: INSERT,
  todos: {
    id: currentId++,
    text,
    done: false,
  },
});
export const toggle = (id) => ({
  type: TOGGLE,
  id,
});
export const remove = (id) => ({
  type: REMOVE,
  id,
});

const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초",
      done: true,
    },
    {
      id: 2,
      text: "리액트 리덕스",
      done: false,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: [...state.todos, action.todos],
      };
    case TOGGLE:
      console.log(state.todos, action);
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };

    default:
      return state;
  }
};

export default todos;
