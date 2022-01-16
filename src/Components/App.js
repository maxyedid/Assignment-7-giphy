import React from 'react';
import axios from 'axios';
import SearchField from "./SearchField";
import GifCard from "./GifCard";

const baseURL = "http://api.giphy.com/v1/gifs/"
const apiKey = "pgpqAc3RpgbuB1cHj0YdXzdl5l3q0vQg"

// Trending Search
// trending?api_key=

function App() {
    // https://www.freecodecamp.org/news/how-to-use-axios-with-react/
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL
        + "trending?api_key="
        + apiKey)
            .then((response) => {
            console.log(response)
        });
    }, []);

    if (!post) return null;

    return (
        <>
            <SearchField />
            <GifCard />
        </>
    );
}

export default App;
