import './App.css';
import React from 'react'
import GifCard from './GifCard'
import SearchBar from './SearchBar'

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <h1>Testing</h1>
      <SearchBar />
      <GifCard />
    </div>
    )}
    
}

export default App;
