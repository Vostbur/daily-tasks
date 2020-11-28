import React from 'react';

export const SearchBar = () => {
    const searchText = 'Type here for search';
    const searchStyle = {
        fontSize: '20px'
    };

    return <input
        placeholder={searchText}
        style={searchStyle} />;
};