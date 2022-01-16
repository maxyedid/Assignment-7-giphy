import React from 'react';
import GifCard from './GifCard';

const GifList = (props) => {

    return (
        <div className='layout'>
        {props.gifs.map((gif, i) => 
        <GifCard key={i} url={gif.images.downsized.url} />
    )}
    </div>
    );
    
};

export default GifList;