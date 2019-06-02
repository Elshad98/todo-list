import React from 'react';
import './TodoListItem.css';

class TodoListItem extends React.Component {
    constructor({ label, onDeleted, onToggleImportant, onToggleDone, done, important}){
        super();
        this.state = {
            editing: false
        };
        this.textInput = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(){
        this.setState(({editing}) => ({editing : !editing}));
    }

    handleSubmit(evt){
        evt.preventDefault();
        const id = this.props.id;
        const formInput = this.textInput.current;
        const label = this.textInput.current.value;
        if(label && isNaN(label)){
            formInput.classList.remove('is-invalid');
            this.props.onEdit(id, label);
            this.setState(({editing}) => ({editing: !editing}));
        }else
            formInput.classList.add('is-invalid');
    }

    renderForm(){
        const { label } = this.props;
        return(
            <form  onSubmit={this.handleSubmit} className="todo-list-item d-flex">
                <input type="text"
                        ref={this.textInput}
                        className="todo-list-item-label form-control form-input" 
                        defaultValue={label} />
                <button type="submit"
                        className="btn btn-outline-primary btn-sm float-right">
                    <i className="fa fa-floppy-o" />
                </button>
            </form>
        );
    }

    renderDisplay(){
        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;
        let classNames = 'todo-list-item';

        if (done)
            classNames += ' done';
        if (important)
            classNames += ' important';

        return (
            <span className={`d-flex ${classNames}`}>
                <span
                    onClick={onToggleDone}
                    className="todo-list-item-label todo-label">
                    {label}
                </span>
                <div className="buttons">                    
                    <button type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={this.handleClick}>
                        <i className="fa fa-pencil" />
                    </button>
                    <button type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={onDeleted}>
                        <i className="fa fa-trash-o" />
                    </button>                    
                    <button type="button"
                        className="btn btn-outline-success btn-sm"
                        onClick={onToggleImportant}>
                        <i className="fa fa-exclamation" />
                    </button>
                </div>
            </span>
        );
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

export default TodoListItem;