import React, {Component} from 'react';

export default class PlayListForm extends Component {
  constructor() {
    super()
    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    }
  }

  addToList = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle: ''});
  }

  _handleChange = (event) => {
    let inputName = event.target.name
    this.setState({
      [inputName]: event.target.value})
  }

  render() {
    return (
      <form className="col-5 mt-3" onSubmit={this.addToList}>
        <div className="form-group d-flex flex-column align-items-start">
          <label>Username:</label>
          <input type="text" onChange={this._handleChange} name="userName" className="form-control" placeholder="Name or User Name" value={this.state.userName}/>
        </div>
        <div className="form-group d-flex flex-column align-items-start">
          <label>Artist/Band:</label>
          <input type="text" onChange={this._handleChange} name="songArtist" className="form-control" placeholder="Artist or Band Name" value={this.state.songArtist}/>
        </div>
        <div className="form-group d-flex flex-column align-items-start">
          <label>Song Title:</label>
          <input type="text" onChange={this._handleChange} name="songTitle" className="form-control" placeholder="Song Title" value={this.state.songTitle}/>
        </div>
        <div className="form-group d-flex flex-column align-items-start">
          <label>Notes about Song:</label>
          <textarea className="form-control" onChange={this._handleChange} name="songNotes" rows="3" value={this.state.songNotes}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}
