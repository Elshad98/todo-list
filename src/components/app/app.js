import React from 'react';

import TodoList from '../todo-list';
import todoData from '../todo-data';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

class App extends React.Component {

    state = {
        term: '',
        filter: 'all',
        todos: todoData
    };

    createTodoItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.nextId()
        }
    }

    handleDelete = (id) => {
        const todos = this.state.todos.filter(todo => todo.id !== id)
        this.setState({ todos: todos });
    }

    handleEdit = (id, text) => {
        const todos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.label = text;
            }
            return todo;
        });
        this.setState({ todos: todos });
    }

    nextId() {
        this._nextId = this._nextId || this.state.todos.length + 1;
        return this._nextId++;
    }

    handleAdd = (text) => {
        const todo = this.createTodoItem(text);
        const todos = [...this.state.todos, todo];
        this.setState({ todos: todos });
    }

    onToggleImportant = (id) => {
        const todos = this.toggleProperty(this.state.todos, id, 'important')
        this.setState({ todos: todos });
    }

    onToggleDone = (id) => {
        const todos = this.toggleProperty(this.state.todos, id, 'done');
        this.setState({ todos: todos });
    }

    toggleProperty(array, id, propName) {
        const idx = array.findIndex(todo => todo.id === id);
        const oldItem = array[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };
        return [...array.slice(0, idx), newItem, ...array.slice(idx + 1)];
    }

    onSearchChange = (term) => {
        this.setState({ term: term });
    }

    search(items, term) {
        if (term.length === 0) {
            return items;
        } else {
            return items.filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
        }
    }

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items
            case 'done':
                return items.filter((item) => item.done);
            case 'active':
                return items.filter((item) => !item.done);
            default:
                return items
        }
    }

    onFilterChange = (filter) => {
        this.setState({ filter: filter });
    }

    render() {
        const { todos, term, filter } = this.state;
        const doneCount = todos.filter((todo) => todo.done === true).length;
        const todoCount = todos.length - doneCount;
        const visibleItems = this.filter(this.search(todos, term), filter);
        return (
            <div className='todo-app'>
                <AppHeader todo={todoCount} done={doneCount} />
                <div className='top-panel d-flex'>
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange} />
                </div>
                <TodoList
                    onDeleted={this.handleDelete}
                    onEdit={this.handleEdit}
                    todos={visibleItems}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone} />
                <ItemAddForm onAdd={this.handleAdd} />
            </div>
        );
    }
}

export default App;