import './App.css';
import SearchField from './components/SearchField';
import axios from 'axios';
import React from 'react';
import GifList from './components/GifList';


//console.log(process.env.REACT_APP_GIPHY_API_KEY)

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  async componentDidMount() {
    const key = process.env.REACT_APP_GIPHY_API_KEY;
    const url = `http://api.giphy.com/v1/gifs/trending?api_key=${key}`;
    try {
      let gifs = await axios.get(url);
      this.setState({ gifs: gifs.data.data });
    } catch (error) {
      console.error(error);
    }
  }

  updateState = (newGifs) => {
    this.setState({
      gifs: newGifs
    })
  }

  render() {

    return (
      <section>
        
        <SearchField
          updateState={this.updateState}
          gifs={this.state.gifs}
        />

        <div>
          <GifList
            gifs={this.state.gifs}
          />
        </div>
      </section>
    );
  }
}
export default App