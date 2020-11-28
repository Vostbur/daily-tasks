import React from 'react';
import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { Tasks } from './Tasks';

const tasks = [
    { name: 'Make todo react app', important: false, id: 1 },
    { name: 'Drink coffee', important: true, id: 2 },
    { name: 'Have dinner', important: false, id: 3 }
];

export const App = () => {
    return <div>
        <Header />
        <SearchBar />
        <Tasks tasks={tasks} />
    </div>;
};