import React from 'react';

function GifCard() {
    // Sort by oldest to newest import date time
    // Sort by newest to oldest import date time

    return (
        <div>
            <input type="radio"
                   id="parameter1"
                   name="parameters"
                   value="New"/>
            <label htmlFor="parameter1">Sort by newest</label>
            <input type="radio"
                   id="parameter2"
                   name="parameters"
                   value="Old"/>
            <label htmlFor="parameter2">Sort by oldest</label>
            <input type="radio"
                   id="parameter3"
                   name="parameters"


                   value="Small"/>
            <label htmlFor="parameter1">Sort by smallest</label>
            <input type="radio"
                   id="parameter3"
                   name="parameters"

                   value="Large"/>
            <label htmlFor="parameter1">Sort by largest</label>
        </div>
    )
}

export default GifCard;


