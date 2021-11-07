import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import { changeInput, insert, remove, toggle } from "../modules/todos";

const TodosContainer = () => {
  const input = useSelector((state) => state.todos.input);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const onChangeInput = (input) => dispatch(changeInput(input));

  const onInsert = (text) => dispatch(insert(text));

  const onToggle = (id) => dispatch(toggle(id));

  const onRemove = (id) => dispatch(remove(id));

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodosContainer;
