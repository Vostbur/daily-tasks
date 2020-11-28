import React from 'react';

export const TaskItem = ({ name, important = false }) => {
    const style = {
        color: important ? 'tomato' : 'black'
    };
    return <span style={style}>{name}</span>;
};
