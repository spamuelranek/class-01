
import './App.css';
import Footer from './Footer';
import Header from './Header';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    )
  }
}

