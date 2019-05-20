import React from 'react';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import todoData from './components/todoData';
import ItemStatusFilter from './components/item-status-filter';
import ItemAddForm from './components/item-add-form';
import './index.css';

class App extends React.Component{
    constructor () {
        super();
        this.state = {
            todos: todoData
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id) {
        this.setState(({ todos }) => {
            const newArray = todos.filter(todo => todo.id !== id);
            return {
                todos: newArray
            };
        });
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader todo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    onDeleted={this.handleDelete}
                    todos={this.state.todos} />
                <ItemAddForm />
            </div>
        );
    }
}

export default App;