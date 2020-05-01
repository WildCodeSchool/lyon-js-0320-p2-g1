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
      randomCocktail: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
    this.getNext();
  }

  getNext () {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => {
        this.setState({ randomCocktail: response.data.drinks[0] });
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleClick () {
    this.setState(prevState => ({
      randomCocktail: this.getNext()
    }));
  }

  calendar () {
    const date = new Date();
    return (
      (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()
    );
  }

  drinkType () {
    if (this.state.randomCocktail && this.state.randomCocktail.strAlcoholic === 'Alcoholic') {
      return (
        <div className='signal'>
          <div className='Alcoholic-signal' />
          <p className='Alcoholic'>Alcoholic drink</p>
        </div>
      );
    } else {
      return (
        <div className='signal'>
          <div className='Soft-signal' />
          <p className='Soft'>Soft drink</p>
        </div>
      );
    }
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
          {
            this.state.randomCocktail
              ? (<p className='title-cod'>{'Today, discover the ' + this.state.randomCocktail.strDrink}</p>)
              : (<p>loading</p>)
          }
          <div className='Main-image'>
            {
              this.state.randomCocktail
                ? (<img src={this.state.randomCocktail.strDrinkThumb} alt='cocktail of the day' />)
                : (<p>Not found</p>)
            }
          </div>
          <div className='type'>
            {
              this.drinkType()
            }
          </div>
          <div id='recipe'>
            <button className='btn btn-lg'>Recipe details</button>
            <button className='btn btn-lg' type='button' onClick={this.handleClick}>Next</button>
          </div>
          {
            this.state.randomCocktail
              ? (<p className='text-cod'> {this.state.randomCocktail.strInstructions}</p>)
              : (<p>loading</p>)
          }
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
