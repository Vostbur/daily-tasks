import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
    return <h1>Daily Tasks</h1>;
};

const SearchBar = () => {
    const searchText = 'Type here for search';
    const searchStyle = {
        fontSize: '20px'
    };

    return <input
        placeholder={searchText}
        style={searchStyle} />;
};

const Tasks = () => {
    return <ul>
        <li>Start training react app</li>
        <li>Make coffee</li>
    </ul>;
};

const App = () => {
    return <div>
        <Header />
        <SearchBar />
        <Tasks />
    </div>;
};

ReactDOM.render(<App />,
    document.getElementById('root'));

