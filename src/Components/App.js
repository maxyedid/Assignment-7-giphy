import React from 'react';
import useAxios from 'axios-hooks';
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
                        console.log(response.data.data[0].images.original.url);
                        setGifs(response.data);
                    });
            } catch (error) {
                console.log(error);
            }
    },[]);

    async function searchGifs() {
        try {
            await axios.get(baseURL
                + "search?q=" + {gifs}
                + "&api_key=" + apiKey)
                .then((response) => {
                    console.log({gifs})
                    console.log(response.data)
                    console.log(response.data.data[0].images.original.url);
                    setGifs(response.data);
                });
        } catch (error) {
            console.log(error);
        }
    }

    const updateGifs = (keyword) => {
        setGifs(keyword);
        searchGifs();
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
            <SearchField
                updateGifs={{updateGifs}}
            />
            <h2>Trending</h2>
            {gifs.data.map(gif =>
            <img key={gif.id} src={gif.images.original.url}/>)}

            {/*<div>*/}
            {/*    /!*<button onClick={refetch}>refetch</button>*!/*/}
            {/*    /!*<p></p>*!/*/}
            {/*    /!*{data.data.map(gif =>*!/*/}
            {/*    /!*<img src={gif.images.original.url}/>)}*!/*/}
            {/*    /!*<img src={data.data[0].images.original.url}/>*!/*/}

            {/*    /!*<pre>{JSON.stringify(data, null, 2)}</pre>*!/*/}

            {/*</div>*/}
        </>
    );
}

export default App;
