import React from 'react';
import ReactDOM from 'react-dom';

const el = (
    <div>
        <h1>Daily Tasks</h1>
        <input placeholder='search' />
        <ul>
            <li>Start training react app</li>
            <li>Make coffee</li>
        </ul>
    </div>
);

ReactDOM.render(el,
    document.getElementById('root'));

