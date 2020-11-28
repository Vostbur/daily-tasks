import React from 'react';
import TaskItem from '../TaskItem';
import './Tasks.css';

const Tasks = ({ tasks }) => {
    const taskList = tasks.map((t) => {
        const { id, ...items } = t;

        return (
            <li className='list-group-item' key={id}>
                <TaskItem {...items} />
            </li>
        );
    });

    return (
        <ul className='list-group tasks'>
            {taskList}
        </ul>
    );
};

export default Tasks;
