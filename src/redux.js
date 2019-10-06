import { createStore } from 'redux';
import uuid from 'uuid/v4';

const initialState = {
    todos: [
        { id: uuid(), name: 'gym', complete: false },
        { id: uuid(), name: 'walking dog', complete: true }
    ]
}

export const store = createStore(
    reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// function reducer(state, action) {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return {
//                 ...state,
//                 todos: [...state.todos, action.paylad]
//             }
//     }
// }

function reducer(state, { type, payload }) {
    switch (type) {
        case 'ADD_TODO':
            // debugger;
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => (todo.id === payload) ? { ...todo, complete: !todo.complete } : todo)
            }
        case 'DELETE_TODO':
            //debugger;
            // must NOT be the same as payload
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            }
        default:
            return state;
    }
}

export const addTodoAction = (todo) => ({
    type: 'ADD_TODO',
    payload: todo
});

export const toggleTodoAction = todoID => ({
    type: 'TOGGLE_TODO',
    payload: todoID
});

export const deleteTodoAction = todoID => ({
    type: 'DELETE_TODO',
    payload: todoID
});