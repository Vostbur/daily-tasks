import React from 'react';
import { TaskItem } from './TaskItem';

export const Tasks = () => {
    return <ul>
        <li><TaskItem
            name='Start training react app' /></li>
        <li><TaskItem
            name='Make coffee'
            important /></li>
    </ul>;
};
