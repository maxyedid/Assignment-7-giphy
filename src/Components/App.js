import React from 'react';
import axios from 'axios';
import SearchField from "./SearchField";
import GifCard from "./GifCard";

const baseURL = "http://api.giphy.com/v1/gifs/"
const apiKey = "pgpqAc3RpgbuB1cHj0YdXzdl5l3q0vQg"

function App() {
    const [gifs, setGifs] = React.useState(null);

    React.useEffect(async () => {
            try {
                await axios.get(baseURL
                    + "trending?api_key="
                    + apiKey)
                    .then((response) => {
                        console.log(response.data)
                        console.log(response.data.data[0].url);
                        setGifs(response.data.data[0].url);
                    });
            } catch (error) {
                console.log(error);
            }
    },[gifs]);

    if (!gifs) return null;

    return (
        <>
        <ul>
            {gifs.data.map(gif =>
            <li key={gif.id}>{gif.url}</li>)}
        </ul>
        </>
    );
}

export default App;
