import React from 'react';

function GifCard({sortGifs}) {
    const [sort, setSort] = React.useState("")
    const handleChange = (event) => {
        event.preventDefault();
        setSort(event.target.value);
    }

    const handleClick = (event) => {
        console.log(sort);
        sortGifs(sort);
    }

    return (
        <>
            <input type="radio" id="parameter1" name="parameters"
                   value="new"
                   required onChange={handleChange}
                   onClick={handleClick}/>
            <label htmlFor="parameter1">Sort by newest</label>
            <input type="radio" id="parameter2" name="parameters"
                   value="old"
                   required onChange={handleChange}
                   onClick={handleClick}/>
            <label htmlFor="parameter2">Sort by oldest</label>
        </>
    )
}

export default GifCard;


