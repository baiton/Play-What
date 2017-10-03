import React, { Component } from 'react';
import '../styles/App.css';

import NavBar from './NavBar';
import Playlist from './Playlist';
import PlayListForm from './PlayListForm';


class App extends Component {
constructor(){
  super()
  this.state = {
    songInfo: []
  }
}




  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="row d-flex justify-content-center">
        <PlayListForm/>
        <Playlist
          songInfo={this.state.songInfo}
        />
        </div>
      </div>
    );
  }
}

export default App;
