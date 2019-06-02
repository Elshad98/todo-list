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
        this.handleAdd = this.handleAdd.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleDone = this.onToggleDone.bind(this);
    }

    handleDelete(id) {
        this.setState(({ todos }) => {
            const newArray = todos.filter(todo => todo.id !== id);
            return {
                todos: newArray
            };
        });
    }

    nextId(){
        this._nextId = this._nextId || 4;
        return this._nextId++;
    }

    handleAdd(text){
        const todo = {
            id: this.nextId(),
            label: text,
            important: false
        }
        const todos = [...this.state.todos, todo];
        this.setState(state => ({todos: todos}));
    }

    onToggleImportant(id){
        console.log('Toggle Important', id);
    }

    onToggleDone(id){
        console.log('Toggle done', id);
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
                    todos={this.state.todos} 
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <ItemAddForm onAdd={this.handleAdd} />
            </div>
        );
    }
}

export default App;