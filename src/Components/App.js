import React from 'react';
import useAxios from 'axios-hooks';
import SearchField from "./SearchField";
import GifCard from "./GifCard";

const baseURL = "http://api.giphy.com/v1/gifs/"
const apiKey = "pgpqAc3RpgbuB1cHj0YdXzdl5l3q0vQg"

function App() {
    /*const [gifs, setGifs] = React.useState(null);

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
    },[gifs]);*/

    const [{data, loading, error}, refetch] = useAxios(
        "http://api.giphy.com/v1/gifs/trending?api_key=pgpqAc3RpgbuB1cHj0YdXzdl5l3q0vQg"
    )

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    // if (!gifs) return null;

    return (
        <>
        {/*<ul>*/}
        {/*    <{gifs.data.map(gif =>*/}
        {/*    <li key={gif.id}>{gif.url}</li>)}>*/}
        {/*</ul>*/}

            <div>
                <button onClick={refetch}>refetch</button>
                <p>{data.data[0].url}</p>
                {data.data.map(gif =>
                <img src={gif.images.original.url}/>)}
                <img src={data.data[0].images.original.url}/>

                {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}

            </div>
        </>
    );
}

export default App;
