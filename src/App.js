import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux';
import TodoInput from './comps/TodoInput';
import TodoList from './comps/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
