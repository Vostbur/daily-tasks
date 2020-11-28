import React from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import TaskFilter from '../TaskFilter/TaskFilter';
import Tasks from '../Tasks';
import './App.css';

const App = () => {
    const tasks = [
        { name: 'Make todo react app', important: false, id: 1 },
        { name: 'Drink coffee', important: true, id: 2 },
        { name: 'Have dinner', important: false, id: 3 }
    ];
    return (
        <div className='app'>
            <Header toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchBar />
                <TaskFilter />
            </div>
            <Tasks
                tasks={tasks}
                onDeleteClick={ (id) => console.log('del', id) } />
        </div>
    );
};

export default App;
