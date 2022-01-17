import React from 'react';

function GifCard() {
    // Sort by oldest to newest import date time
    // Sort by newest to oldest import date time

    return (
        <div>
            <input type="checkbox"
                   id="parameter1"
                   name="new"
                   value="New"/>
            <label htmlFor="parameter1">Sort by newest</label>
            <input type="checkbox"
                   id="parameter2"
                   name="old"
                   value="Old"/>
            <label htmlFor="parameter2">Sort by oldest</label>
            <input type="checkbox"
                   id="parameter3"
                   name="small"
                   value="Small"/>
            <label htmlFor="parameter1">Sort by smallest</label>
            <input type="checkbox"
                   id="parameter3"
                   name="large"
                   value="Large"/>
            <label htmlFor="parameter1">Sort by largest</label>
        </div>
    )
}

export default GifCard;


