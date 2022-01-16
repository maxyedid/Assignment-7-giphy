import React from 'react';
import axios from 'axios';

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Input: "",
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const key = process.env.REACT_APP_GIPHY_API_KEY;
        const link = `https://api.giphy.com/v1/gifs/search?q=${this.state.Input}&api_key=${key}`;
        try {
            let gifs = await axios.get(link);
            this.props.updateState(gifs.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = (e) => {
        const val = e.target.val;
        this.setState({
            ...this.state,
            searchInput: val,
        });
    };

    handleRand = async (e) => {
        e.preventDefault();
        const key = process.env.REACT_APP_GIPHY_API_KEY;
        const link = `http://api.giphy.com/v1/gifs/random?api_key=${key}`;
        try {
          let gifs = await axios.get(link);
          this.props.updateState([ gifs.data.data ]);
        } catch (error) {
          console.error(error);
        }
      }

    render() {
        return (
            <div>
                <div className='searchbar'>
                    <h1>GIPHY: Assignment 7</h1>
                    <label id='srch-lbl'>Search: </label>
                    <input
                        name='inputvalue'
                        type='text'
                        placeholder='ex. Cars'
                        value={this.state.inputvalue}
                        onChange={this.searchInputChanged}
                        id='searchInput'
                    />
                    <span></span>
                    <button onClick={this.handleSubmit} id='srch-btn'>Submit</button>
                    <span></span>
                    <button onClick={this.handleRand} id='rand-btn'>I'm Feeling Random</button>
                </div>
                <div>
                </div>
            </div>
        )
    }
}
export default SearchField;