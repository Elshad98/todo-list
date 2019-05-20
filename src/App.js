import React from 'react';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import todoData from './components/todoData';

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
}

export default App;