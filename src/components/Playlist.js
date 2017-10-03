import React, {Component} from 'react';

import PlayListItem from './PlayListItem';

export default class Playlist extends Component {
constructor(){
  super()
  this.state={
    songs:[]
  }
}


  componentDidMount(){
          fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
              return results.json();
            }).then(data => {
              this.setState({songs: data});
              console.log("state", this.state.songs);
            })
       }

  fetchData = (e) => {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }

  render() {
    return (
      <div className="col-5">
        <button type="submit" onClick={this.fetchData} className="btn btn-primary m-3">Update List</button>
        {this.state.songs.map((songInfo) => {
          return (
            <PlayListItem
            key={this.state.songs._id}
            songInfo={songInfo}
          />)
        })}
      </div>
    )
  }
}
