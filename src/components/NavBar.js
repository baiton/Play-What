import React, { Component } from 'react';
import logo from '../logo.svg';


export default class NavBar extends Component {
render(){
  return(

    <nav className="navbar navbar-dark bg-primary">
      <h1 className="navbar-brand font-weight-bold d-flex justify-content-start align-items-center">
        <img src={logo} width="30" height="30" className="App-logo" alt=""/>
        Play What!?
      </h1>
    </nav>

  )
}
}
