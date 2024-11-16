import React from 'react';
import './Search.css';  

function Search({ searchValue, onSearchChange }) {
    return (
        <div className="search-container">
            <label>Search</label>
            <input 
                type="text" 
                placeholder="Search..."
                value={searchValue} 
                onChange={(e) => onSearchChange(e.target.value)} 
            />
        </div>
    );
}

export default Search;
