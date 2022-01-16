import React from 'react';
import '../App.css';

const GifCard = (props) => {
    return (
      <div className="gif-item">
      <img src={props.url} alt="gif" className='gifimg'/>
      </div>
    );
  };
export default GifCard;