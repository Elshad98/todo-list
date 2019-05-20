import React from 'react';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import todoData from './components/todoData';
import ItemStatusFilter from './components/ItemStatusFilter';
import './index.css';

const App = () => {
    return (
        <div className="todo-app">
            <AppHeader todo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    );
}

export default App;