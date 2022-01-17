import React from 'react';

function GifCard({sortGifs}) {
    const [sort, setSort] = React.useState("")
    const handleClick = (event) => {
        sortGifs(sort);
    }

    return (
        <>
            <input type="radio" id="parameter1" name="parameters"
                   value="new"
                   required onChange={event => setSort(event.target.value)}
                   onClick={handleClick}/>
            <label htmlFor="parameter1">Sort by newest</label>
            <input type="radio" id="parameter2" name="parameters"
                   value="old"
                   required onChange={event => setSort(event.target.value)}
                   onClick={handleClick}/>
            <label htmlFor="parameter2">Sort by oldest</label>
            <input type="radio" id="parameter3" name="parameters"
                   value="small"
                   required onChange={event => setSort(event.target.value)}
                   onClick={handleClick}/>
            <label htmlFor="parameter1">Sort by smallest</label>
            <input type="radio" id="parameter4" name="parameters"
                   value="large"
                   required onChange={event => setSort(event.target.value)}
                   onClick={handleClick}/>
            <label htmlFor="parameter1">Sort by largest</label>
        </>
    )
}

export default GifCard;


