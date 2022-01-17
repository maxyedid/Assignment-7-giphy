import React from 'react';

function GifCard(props) {
    // Sort by newest to oldest import date time
    // Sort by oldest to newest import date time
    const sortDate = order =>{
        switch(order) {
            case 'old': return this.setState({data : this.state.data.sort((a,b)=> a-b) })
            case 'new' : return this.setState({data : this.state.data.sort((a,b) => b-a)})
       }
    }

    const sortSize = order => {
        switch(order) {
        case 'small': return this.setState({data : this.state.data.sort((a,b)=> a-b) });
        case 'large' : return this.setState({data : this.state.data.sort((a,b) => b-a)});
        }
    }

    return (
        <>
            <input type="radio"
                   id="parameter1"
                   name="parameters"
                   value="new"
                   onClick={sortDate}/>
            <label htmlFor="parameter1">Sort by newest</label>
            <input type="radio"
                   id="parameter2"
                   name="parameters"
                   value="old"
                   onClick={sortDate}/>
            <label htmlFor="parameter2">Sort by oldest</label>
            <input type="radio"
                   id="parameter3"
                   name="parameters"
                   value="small"
                   onClick={sortSize}/>
            <label htmlFor="parameter1">Sort by smallest</label>
            <input type="radio"
                   id="parameter3"
                   name="parameters"
                   value="large"
                   onClick={sortSize}/>
            <label htmlFor="parameter1">Sort by largest</label>
        </>
    )
}

export default GifCard;


