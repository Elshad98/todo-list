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
            todos: todoData,
            term: '',
            filter: 'all'
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleDone = this.onToggleDone.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    createTodoItem(label){
        return{
            label: label,
            important: false,
            done: false,
            id: this.nextId()
        }
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
        const todo = this.createTodoItem(text);
        const todos = [...this.state.todos, todo];
        this.setState(state => ({todos: todos}));
    }

    onToggleImportant(id){
        this.setState(({todos}) => {
            return {
                todos: this.toggleProperty(todos, id, 'important')
            }
        });
    }

    onToggleDone(id){
        this.setState(({todos}) => {
            return {
                todos: this.toggleProperty(todos, id, 'done')
            }
        });
    }

    toggleProperty(array, id, propName){
        const idx = array.findIndex(todo => todo.id === id);
        const oldItem = array[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [...array.slice(0, idx), newItem, ...array.slice(idx + 1)];
    }

    onSearchChange(term){
        this.setState({term: term});
    } 

    search(items, term){
        if(term.length === 0)
            return items;
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    filter(items, filter){
        switch(filter){
            case 'all':
                return items
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items
        }
    }

    onFilterChange(filter){
        this.setState({filter: filter});
    }

    render() {
        const { todos, term, filter } = this.state;
        const doneCount = todos.filter((todo) => todo.done === true).length;
        const todoCount = todos.length - doneCount;
        const visibleItems = this.filter(this.search(todos, term), filter);
        return (
            <div className="todo-app">
                <AppHeader todo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter 
                        filter={filter}
                        onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList
                    onDeleted={this.handleDelete}
                    todos={visibleItems} 
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <ItemAddForm onAdd={this.handleAdd} />
            </div>
        );
    }
}

export default App;