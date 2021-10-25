
import './App.css';

import React, { Component } from 'react'

import Footer from './Footer';
import Main from './Main';
import Header from './Header';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

