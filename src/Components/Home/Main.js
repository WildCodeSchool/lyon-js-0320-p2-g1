import React, { Component } from 'react'
import video from './Strawberries.mp4'
import './Main.css'


class Main extends Component {

  calendar(){
    const date = new Date();
    return(
        (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear()
    )
  }  
    
  render() {
    return (
      <div className="Main">
        <div className="Video" height="auto">
          <video width="100%" height="auto" autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
          <h1>Welcome to <br />Cocktail finder</h1>
        </div>
        <h2>Cocktail of the day!</h2>
    <h5 id="date">{this.calendar()}</h5>
      </div>
    );
    
  }
}
export default Main
