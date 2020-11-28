import React, { Component } from 'react';
import './TaskAddBar.css';

export default class TaskAddBar extends Component {
    render() {
        return (
            <div className='task-add-bar'>
                <button
                    className='btn btn-outline-secondary'
                    onClick={() => this.props.onAddClick('HELLO')}>
                    Add task
                </button>
            </div>
        )
    }
}