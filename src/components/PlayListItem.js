import React, {Component} from 'react';

export default class PlayListItem extends Component {
  render() {
    console.log("this.props.songInfo", this.props.songInfo);
    const {songInfo} = this.props
    return (
      <ul className="list-group playlist-card m-3">
        <li className="list-group-item">{songInfo.userName}</li>
        <li className="list-group-item">{songInfo.songArtist}</li>
        <li className="list-group-item">{songInfo.songTitle}</li>
        <li className="list-group-item">{songInfo.songNotes}</li>
      </ul>
    )
  }
}
