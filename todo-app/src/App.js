import React from 'react';
import TodoInsert from './components/TodoInsert/TodoInsert';
import TodoTemplate from './components/TodoTemplate/TodoTemplate';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
    </TodoTemplate>
  );
};

export default App;
