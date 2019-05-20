import React from 'react';
import './TodoListItem.css';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            done: false,
            important: this.props.important
        };

        this.onLabelClick = this.onLabelClick.bind(this);
        this.onMarkImportan = this.onMarkImportan.bind(this);
    }

    onLabelClick() {
        this.setState({
            done: !this.state.done
        });
    }

    onMarkImportan() {
        this.setState({
            important: !this.state.important
        });
    }

    render() {
        const { label } = this.props;
        const { done, important } = this.state;

        return (
            <span className={`todo-list-item ${done ? 'done' : ''}
                                             ${important ? 'important' : ''}`}>
                <span
                    onClick={this.onLabelClick}
                    className="todo-list-item-label">
                    {label}
                </span>
                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onMarkImportan}>
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