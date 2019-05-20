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
        this.onMarkImportant = this.onMarkImportant.bind(this);
    }

    onLabelClick() {
        this.setState(({ done }) => {
            return {
                done: !done
            };
        });
    }

    onMarkImportant() {
        this.setState(({ important }) => {
            return {
                important: !important
            };
        });
    }

    render() {
        const { label } = this.props;
        const { done, important } = this.state;
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }
        return (
            <span className={classNames}>
                <span
                    onClick={this.onLabelClick}
                    className="todo-list-item-label">
                    {label}
                </span>
                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onMarkImportant}>
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