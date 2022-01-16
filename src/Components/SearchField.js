import React from 'react';
import axios from "axios";

const baseURL = "http://api.giphy.com/v1/gifs/"
const apiKey = "pgpqAc3RpgbuB1cHj0YdXzdl5l3q0vQg"

const SearchField = ({updateGifs}) => {
    const [search, setSearch] = React.useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(search);
        updateGifs(search);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       value={search}
                       onChange={event => setSearch(event.target.value)}/>
                <input type="submit" value="submit"/>
            </form>
        </>
    );
}

export default SearchField;

