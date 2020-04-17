import React, { Component } from 'react';
import CompoCocktail from './CompoCocktail';
import Quizz from './Quizz';

class Home extends Component {
  render () {
    return (
      <div className="container">
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