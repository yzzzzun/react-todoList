import React, { useState } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'react.js 학습', checked: true },
    { id: 2, text: 'node.js 학습', checked: true },
    { id: 3, text: 'mongoDB 학습', checked: false },
  ]);
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
