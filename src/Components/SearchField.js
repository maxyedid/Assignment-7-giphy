import React from 'react';
import axios from "axios";

const baseURL = "http://api.giphy.com/v1/gifs/"
const apiKey = "pgpqAc3RpgbuB1cHj0YdXzdl5l3q0vQg"

function SearchField(props) {
    const [search, setSearch] = React.useState("")
    const [gifs, setGifs] = React.useState(null)

    async function fetchData() {
        try {
            const response = await axios.get(baseURL
                + "search?q="
                + {search}
                + "&api_key="
                + apiKey)
                // .then((response) => {
                //     console.log({search})
                //     console.log(response.data)
                //     console.log(response.data.data[0].images.original.url);
                //     setGifs(response.data);
                // });
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        fetchData()
    },[]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({search})
        fetchData()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       value={search}
                       onChange={event => setSearch(event.target.value)}/>
                <input type="submit" value="submit"/>
            </form>

            {gifs.data.map(gif =>
                <img key={gif.id} src={gif.images.original.url}/>)}

        </>
    );
}

export default SearchField;

