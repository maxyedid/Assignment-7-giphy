import React from 'react';
import '../SearchField.css';

const SearchField = ({updateGifs}) => {
    const [search, setSearch] = React.useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        updateGifs(search);
    }

    return (
        <>
            <div className="search-bar">
                <h1>GIPHY: Assignment 7</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                           value={search}
                           required onChange={event => setSearch(event.target.value)}/>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        </>
    );
}

export default SearchField;

