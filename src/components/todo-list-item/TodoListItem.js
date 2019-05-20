import React from 'react';
import './TodoListItem.css';

class TodoListItem extends React.Component {
    constructor() {
        super();

        this.state = {
            done: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            done: !this.state.done
        });
    }

    render() {
        const { label, important = false } = this.props;
        const done = this.state.done;
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className={`todo-list-item ${done ? 'done' : ''}`}>
                <span
                    onClick={this.handleClick}
                    className="todo-list-item-label"
                    style={style}>
                    {label}
                </span>
                <button type="button"
                    className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}

export default TodoListItem;