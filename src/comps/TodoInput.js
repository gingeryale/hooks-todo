import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../redux';
import uuid from 'uuid/v4';

export default () => {
    const [todo, setTodo] = useState('');
    //const addTodo = useDispatch((todo) => addTodoAction(todo));
    const dispatch = useDispatch();
    const addTodo = (todo) => dispatch(addTodoAction(todo));


    const onChange = (e) => {
        setTodo(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (todo.trim() === '') return;

        addTodo({
            id: uuid(),
            name: todo,
            complete: false
        });
        setTodo('');
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="form">
                <input type="text"
                    name="todo"
                    placeholder="add a task"
                    value={todo}
                    onChange={onChange}
                />
                <button type="submit">Add</button>
            </div>
        </form>
    )
}