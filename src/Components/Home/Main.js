import React, { Component } from 'react'
import video from './Strawberries.mp4'
import cuba from '../../img/cuba-libre.jpg'
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
          <h1>Welcome to <br />Cocktail Finder</h1>
          <h6>Need some inspiration to make a cocktail? Go try our amazing tool!</h6>
        </div>
        <h2>Cocktail of the day!</h2>
        <h5>{this.calendar()}</h5>
        <p>Today, discover the cuba-libre</p>
        <div className="main-image">
          <img src={cuba} alt="cocktail of the day"></img>
        </div>
        <p className="text-cod">The cocktail originated in the early 20th century in Cuba, 
        after the country won independence in the Spanish–American War. It subsequently became popular across Cuba, the United States, and other countries. Its simple recipe and inexpensive, ubiquitous ingredients have made it one of the world's most popular alcoholic drinks. 
        Drink critics often consider the drink mediocre, but it has been noted for its historical significance.
</p>
        
      </div>
    );
    
  }
}
export default Main
