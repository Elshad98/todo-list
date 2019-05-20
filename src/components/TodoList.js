import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todos}) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}><TodoListItem 
                        label={todo.label}
                        important={todo.important}  /></li>
            ))}
        </ul>
    );
}

export default TodoList;