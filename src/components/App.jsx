import React from 'react';
import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { Tasks } from './Tasks';

export const App = () => {
    return <div>
        <Header />
        <SearchBar />
        <Tasks />
    </div>;
};