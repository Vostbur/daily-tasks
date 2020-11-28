import React, { Component } from 'react';
import './TaskItem.css';

export default class TaskItem extends Component {

    state = {
        done: false,
        important: false
    };

    onNameClick = () => {
        this.setState({
            done: true
        });
    };

    onImportantClick = () => {
        this.setState({
            important: true
        });
    };

    render() {
        const { name } = this.props;
        const { done, important } = this.state;

        let classNames = 'task-item';
        if (done) {
            classNames += ' done';
        };
        if (important) {
            classNames += ' important';
        };

        return (
            <span className={classNames}>
                <span
                    className='task-item-name'
                    onClick={this.onNameClick}>
                    {name}
                </span>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onImportantClick}>
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
