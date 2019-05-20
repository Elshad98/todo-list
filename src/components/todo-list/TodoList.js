import React from 'react';
import TodoListItem from '../todo-list-item';
import './TodoList.css';

const TodoList = ({ todos, onDeleted }) => {
    return (
        <ul className="list-group todo-list">
            {todos.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                    <TodoListItem
                        label={todo.label}
                        important={todo.important}
                        onDeleted={() => {
                            onDeleted(todo.id);
                        }} />
                </li>
            ))}
        </ul>
    );
}

export default TodoList;