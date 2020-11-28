import React, { Component } from 'react';
import './TaskItem.css';

export default class TaskItem extends Component {

    onNameClick = () => {
        console.log(`Done: ${this.props.name}`);
    };

    render() {
        const { name, important = false } = this.props;

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className='task-item'>
                <span
                    className='task-item-name'
                    style={style}
                    onClick={this.onNameClick}>
                    {name}
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
