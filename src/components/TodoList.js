import React from 'react';
import TodoListItem from './TodoListItem';
import './todoList.css';

const TodoList = ({todos}) => {
    return (
        <ul className="list-group todo-list">
            {todos.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                    <TodoListItem 
                        label={todo.label}
                        important={todo.important}  />
                </li>
            ))}
        </ul>
    );
}

export default TodoList;