import React from 'react';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import todoData from './components/todoData';
import ItemStatusFilter from './components/item-status-filter';
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