import React, { Component } from 'react';
import {isLoggedIn} from '../utils/AuthService'
import '../styles/index.css';
import Layout from './Layout'
import Login from './Login'

export default class App extends Component {
  render() {
    let homescreen = () => {
      if (isLoggedIn()) {
        return (<Layout/>)
      } else {
        return (<Login/>)
      }
    }
    return (
      <div className="wrapper">
        {homescreen()}
      </div>
    );
  }
}