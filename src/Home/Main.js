import React, { Component } from 'react'
import video from './Strawberries.mp4'
import './Main.css'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <video width="100%" height="auto" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className="Main-text">
          <h1>Welcome to <br/>Cocktail finder</h1>
        </div>
      </div>
    );
  }
}
export default Main
