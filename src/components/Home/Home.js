import React, { Component } from 'react';
import CompoCocktail from './CompoCocktail';
import Quizz from './Quizz';
import video from '../Images/Strawberries.mp4';
import './Home.css';
import axios from 'axios';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      drinks: []
    };
  }

  componentDidMount () {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => {
        this.setState({ drinks: response.data.drinks });
        const random = Object.values(this.state.drinks[0]);
        this.setState({ drinks: random });
        console.log(this.state.drinks);
      }, (error) => {
        console.log(error);
      });
  }

  calendar () {
    const date = new Date();
    return (
      (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()
    );
  }

  render () {
    return (
      <div className='HomeMain'>
        <div className='Main'>
          <div className='Video' height='auto'>
            <video width='100%' height='auto' autoPlay muted loop>
              <source src={video} type='video/mp4' />
            </video>
            <h1>Welcome to <br />Cocktail Finder</h1>
            <h6>Need some inspiration to make a cocktail?<br />Go try our amazing tool!</h6>
          </div>
          <h2 className='cod'>Suggestions of the day!</h2>
          <h5 className='date'>{this.calendar()}</h5>
          <p className='title-cod'>{'Today, discover the ' + (this.state.drinks[1])}</p>
          <div className='Main-image'>
            <img src={this.state.drinks[20]} alt='cocktail of the day' />
          </div>
          <div id='recipe'>
            <button className='btn btn-lg'>Recipe</button>
            <button className='btn btn-lg'>Other</button>
          </div>
          <p className='text-cod'>{this.state.drinks[14]}</p>
        </div>
        <div className='main1'>
          <CompoCocktail
            firstPanelh4='Compose your cocktail'
            firstPanelParagraphe='Chose your ingredients and we can propose your the best cocktail repices!'
          />
        </div>
        <div className='main2'>
          <Quizz
            secondPanelh4='Find out your favorites cocktails'
            seconPanelParagraphe='Find out all recipes for your favorites cocktails'
            firstPanelh4='Test yourself and play our quizz !'
            firstPanelParagraphe='Find out your cocktail maker skills'
          />
        </div>
      </div>
    );
  }
}

export default Home;
