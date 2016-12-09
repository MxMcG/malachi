import React from 'react';
import { render } from 'react-dom';
import { TodoList } from './components';

render(
  <TodoList todos={dummyTodos} />,
    document.getElementById('app')
);
