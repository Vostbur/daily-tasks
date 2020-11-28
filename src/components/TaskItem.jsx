import React from 'react';
import './TaskItem.css';

export const TaskItem = ({ name, important = false }) => {

    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
        <span className='task-item'>
            <span className='task-item-name' style={style}>
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
};
