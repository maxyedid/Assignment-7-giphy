import React from 'react';

const SearchField = ({updateGifs}) => {
    const [search, setSearch] = React.useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        updateGifs(search);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       value={search}
                       required onChange={event => setSearch(event.target.value)}/>
                <input type="submit" value="submit"/>
            </form>
        </>
    );
}

export default SearchField;

