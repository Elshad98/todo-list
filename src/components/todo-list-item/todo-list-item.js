import React from 'react';

import './todo-list-item.css';

class TodoListItem extends React.Component {

    state = {
        editing: false,
        isInvalid: false,
        text: this.props.label,
    };

    handleClick = () => {
        this.setState(({ editing }) => ({ editing: !editing }));
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const text = this.state.text.trim();
        if (text.length > 0) {
            this.props.onEdit(this.props.id, text);
            this.setState({
                editing: !this.state.editing,
                isInvalid: false,
                text: text
            });
        } else {
            this.setState({ isInvalid: true });
        }
    }

    handleChange = (evt) => {
        this.setState({ text: evt.target.value });
    }

    renderForm() {
        const { isInvalid, text } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className='todo-list-item d-flex'>
                <input type='text'
                    value={text}
                    onChange={this.handleChange}
                    className={`todo-list-item-label form-control form-input ${isInvalid ? 'is-invalid' : ''}`} />
                <button type='submit'
                    className='btn btn-outline-primary btn-sm float-right'>
                    <i className='fa fa-floppy-o' />
                </button>
            </form>
        );
    }

    renderDisplay() {
        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;
        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }

        return (
            <span className={`d-flex ${classNames}`}>
                <span
                    onClick={onToggleDone}
                    className='todo-list-item-label todo-label'>
                    {label}
                </span>
                <div className='buttons'>
                    <button type='button'
                        className='btn btn-outline-primary btn-sm'
                        onClick={this.handleClick}>
                        <i className='fa fa-pencil' />
                    </button>
                    <button type='button'
                        className='btn btn-outline-danger btn-sm'
                        onClick={onDeleted}>
                        <i className='fa fa-trash-o' />
                    </button>
                    <button type='button'
                        className='btn btn-outline-success btn-sm'
                        onClick={onToggleImportant}>
                        <i className='fa fa-exclamation' />
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