import React from 'react';
import './Search.css'
const Search = () => {
    return (
        <div className='filter-list'>
            <form action="" className="search-bar">
                <input type="search" name="search" pattern=".*\S.*" required/>
                    <button className="search-btn" type="submit">
                        <span>Search</span>
                    </button>
            </form>
        </div>
    );
};

export default Search;