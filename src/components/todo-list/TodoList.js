import React from 'react';
import TodoListItem from '../todo-list-item';
import './TodoList.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone, onEdit }) => {
    return (
        <ul className="list-group todo-list">
            {todos.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                    <TodoListItem
                        label={todo.label}
                        important={todo.important}
                        done={todo.done}
                        onDeleted={() => onDeleted(todo.id)} 
                        id={todo.id}
                        onEdit={onEdit}
                        onToggleImportant={() => onToggleImportant(todo.id)}
                        onToggleDone={() => onToggleDone(todo.id)}/>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;