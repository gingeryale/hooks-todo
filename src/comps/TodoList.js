import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodoAction, deleteTodoAction } from '../redux';


export default () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const toggleTodo = (todoID) => dispatch(toggleTodoAction(todoID));
    const deleteTodo = (todoID) => dispatch(deleteTodoAction(todoID));

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id}>
                    <input type="checkbox"
                        checked={todo.complete}
                        onChange={toggleTodo.bind(todo.id, todo.id)}
                    />
                    <span className={todo.complete ? 'complete' : null}>{todo.name}</span>
                    <button className="delete-button" onClick={deleteTodo.bind(todo.id, todo.id)}>X</button>
                </li>
            ))}
        </ul>
    )
}