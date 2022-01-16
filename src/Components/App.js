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
    const [gifs, setGifs] = React.useState(null);

    React.useEffect(() => {
        async function getGIF() {
            try {
                const request = await axios.get(baseURL
                    + "trending?api_key="
                    + apiKey)
                    .then((response) => {
                        setGifs(response.data.data[0].images.original.url);
                    });
            } catch (error) {
                console.log(error);
            }
        }
    },[]);

    if (!gifs) return null;

    return (
        <>
        </>
    );
}

export default App;
