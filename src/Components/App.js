import React from 'react';
import axios from 'axios';
import '../App.css';
// import useAxios from 'axios-hooks';
import SearchField from "./SearchField";
import GifCard from "./GifCard";

const baseURL = "https://api.giphy.com/v1/gifs/"
const apiKey = "0kmUL2CDtL5x8AR5MxwRcIUgnpw8mxy2"

function App() {
    const [gifs, setGifs] = React.useState(null);
    const [header, setHeader] = React.useState("Trending GIFs")
    const [order, setOrder] = React.useState(true);

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

    // Sort GIFs
    const sortGifs = (order) => {
        // console.log("This is the order:" + order)
        if (order === "new") {
            setGifs({data: gifs.data.sort((a, b) =>
                b.import_datetime.localeCompare(a.import_datetime))})
            console.log(gifs)
        }
        if (order === "old") {
            setGifs({data: gifs.data.sort((a, b) =>
                    a.import_datetime.localeCompare(b.import_datetime))})
            console.log(gifs)
        }
    }

    if (!gifs) return null;

    return (
        <>
            <SearchField
                updateGifs={updateGifs}/>

            <GifCard
                sortGifs={sortGifs}/>

            {/*{console.log(gifs.data.sort((a, b) => b.import_datetime.localeCompare(a.import_datetime)*/}
            {/*))}*/}

            <h2>{header}</h2>
            <div>
                {gifs.data.map(gif => <img key={gif.id} src={gif.images.original.url} alt={gif.title}/>)}
            </div>
        </>
    );
}

export default App;
