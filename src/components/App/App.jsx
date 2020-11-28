import React, { Component } from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import TaskFilter from '../TaskFilter/TaskFilter';
import Tasks from '../Tasks';
import './App.css';

export default class App extends Component {

    state = {
        tasks: [
            { name: 'Make todo react app', important: false, id: 1 },
            { name: 'Drink coffee', important: true, id: 2 },
            { name: 'Have dinner', important: false, id: 3 }
        ]
    };

    deleteTask = (id) => {
        this.setState(({ tasks }) => {
            const idx = tasks.findIndex((e) => e.id === id);
            return {
                tasks: [...tasks.slice(0, idx), ...tasks.slice(idx + 1)]
            };
        });
    };

    render() {
        return (
            <div className='app'>
                <Header toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchBar />
                    <TaskFilter />
                </div>
                <Tasks
                    tasks={this.state.tasks}
                    onDeleteClick={this.deleteTask} />
            </div>
        );
    }
}
