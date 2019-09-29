import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

    state = {
        doneFunc: false,
        important: false
    };

    onlabelClick = () => {
        this.setState( ({ doneFunc }) => {
            return {
                doneFunc: !doneFunc
            };
        });
    };

    onMarkImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            };
        });
    };

    render() {

        const { label, onDeleted } = this.props;
        const { doneFunc, important } = this.state;

        let classNames = 'todo-list-item';
        if(doneFunc) {
            classNames += ' done';
        }

        if(important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <span 
                    className="todo-list-item-label" 
                    onClick={ this.onlabelClick }
                >
                    {label}
                </span>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onMarkImportant}
                >
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}
                >
                    <i className="fa fa-trash-o" />
                </button>

            </span>
        )
    }
}