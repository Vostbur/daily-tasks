import React from 'react';
import { TaskItem } from './TaskItem';

export const Tasks = ({ tasks }) => {
    const taskList = tasks.map((t) => {
        const { id, ...items } = t;
        return <li key={id}><TaskItem {...items} /></li>;
    });
    return <ul>{taskList}</ul>;
};
