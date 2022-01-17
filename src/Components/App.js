import React from 'react';
import axios from 'axios';
import './App.css';
// import useAxios from 'axios-hooks';
import SearchField from "./SearchField";
import GifCard from "./GifCard";

const baseURL = "http://api.giphy.com/v1/gifs/"
const apiKey = "0kmUL2CDtL5x8AR5MxwRcIUgnpw8mxy2"

function App() {
    const [gifs, setGifs] = React.useState(null);
    const [header, setHeader] = React.useState("Trending GIFs")

    // Load trending GIFs on mount
    React.useEffect(async () => {
        try {
            await axios.get(baseURL
                + "trending?api_key=" + apiKey)
                .then((response) => {
                    console.log(response.data)
                    setGifs(response.data);
                });
        } catch (error) {
            console.log(error);
        }
    },[]);

    // Reload with GIFs related to keyword
    const updateGifs = (keyword) => {
        console.log({keyword});
        try {
            axios.get(baseURL
                + "search?q=" + keyword
                + "&api_key=" + apiKey)
                .then((response) => {
                    console.log(response.data)
                    console.log(response.data.data[0].images.original.url);
                    setGifs(response.data);
                });
        } catch (error) {
            console.log(error);
        }

        setHeader('Related GIFs to keyword "' + keyword + '":')
    }

    // const [{data, loading, error}, refetch] = useAxios(
    //     "http://api.giphy.com/v1/gifs/trending?api_key=pgpqAc3RpgbuB1cHj0YdXzdl5l3q0vQg"
    // )

    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error!</p>

    if (!gifs) return null;

    return (
        <>
        <ul>

        </ul>
            <section>
            <SearchField
                updateGifs={updateGifs}/>

            <h2>{header}</h2>
                <div>
                    {gifs.data.map(gif =>
                    <img key={gif.id} src={gif.images.original.url} alt={gif.title}/>)}
                </div>
            </section>
        </>
    );
}

export default App;
