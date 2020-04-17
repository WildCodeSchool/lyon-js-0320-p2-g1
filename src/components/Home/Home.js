import React, { Component } from 'react';
import CompoCocktail from './CompoCocktail';
import Quizz from './Quizz';
import video from '../Images/Strawberries.mp4'
import cuba from '../Images/cuba-libre.jpg'
import './Home.css'

class Home extends Component {
  calendar(){
    const date = new Date();
    return(
        (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear()
    )}
  render () {
    return (
      <div className="HomeMain">
        <div className="Main">
        <div className="Video" height="auto">
          <video width="100%" height="auto" autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
          <h1>Welcome to <br />Cocktail Finder</h1>
          <h6>Need some inspiration to make a cocktail?<br />Go try our amazing tool!</h6>
        </div>
        <h2 className="cod">Cocktail of the day!</h2>
        <h5 className="date">{this.calendar()}</h5>
        <p className="title-cod">Today, discover the cuba-libre</p>
        <div className="Main-image">
          <img src={cuba} alt="cocktail of the day"></img>
        </div>
        <div id="recipe">
          <button className="btn btn-lg">Recipe</button>
        </div>
        <p className="text-cod">The cocktail originated in the early 20th century in Cuba, 
        after the country won independence in the Spanish–American War. It subsequently became popular across Cuba, the United States, and other countries. Its simple recipe and inexpensive, ubiquitous ingredients have made it one of the world's most popular alcoholic drinks. 
        Drink critics often consider the drink mediocre, but it has been noted for its historical significance.
        </p>
        
      </div>
        <div className = 'main1'>
        <CompoCocktail
          firstPanelh4 = 'Compose your cocktail' 
          firstPanelParagraphe = 'Chose your ingredients and we can propose your the best cocktail repices!'/>
        </div>
        <div className = 'main2'>
          <Quizz
          secondPanelh4= 'Find out your favorites cocktails' 
          seconPanelParagraphe = 'Find out all recipes for your favorites cocktails' 
          firstPanelh4 = 'Test yourself and play our quizz !' 
          firstPanelParagraphe = 'Find out your cocktail maker skills'/>
        </div> 
      </div>
    )
  }
}

export default Home





    
  
