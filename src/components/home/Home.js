import React, { Component } from 'react';
import CompoCocktail from './CompoCocktail';
import Quizz from './Quizz';
import video from '../../images/Strawberries.mp4';
import './Home.css';
import axios from 'axios';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      randomCocktail: null,
      id: null,
      recipeIngredients: []
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
        this.setState({ recipeIngredients: Object.values(this.state.randomCocktail) });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleClick () {
    this.setState({
      randomCocktail: this.getNext()
    });
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

  ingredient () {
    const cocktailIngredientList = [];
    const cocktailMeasure = [];
    const list = [];
    for (let i = 21; i <= 35; i++) {
      if (this.state.recipeIngredients[i] !== null) {
        cocktailIngredientList.push(this.state.recipeIngredients[i]);
      }
    }
    console.log(cocktailIngredientList);
    for (let j = 36; j <= 50; j++) {
      if (this.state.recipeIngredients[j] !== null) {
        cocktailMeasure.push(this.state.recipeIngredients[j]);
      }
    }
    console.log(cocktailMeasure);
    for (let k = 0; k < cocktailIngredientList.length; k++) {
      if (cocktailMeasure[k] !== undefined) {
        list.push(cocktailMeasure[k] + ' ' + cocktailIngredientList[k]);
      } else if (cocktailIngredientList[k] !== undefined) {
        list.push(cocktailIngredientList[k]);
      }
    }
    return list.map(cocktail =>
      <li key={cocktail}>
        {cocktail}
      </li>);
  }

  render () {
    return (
      <div className='HomeMain'>
        <div className='Video' height='auto'>
          <video width='100%' height='auto' autoPlay muted loop>
            <source src={video} type='video/mp4' />
          </video>
          <h1>Welcome to <br />Cocktail Finder</h1>
          <h6>Need some inspiration to make a cocktail?<br />Go try our amazing tool!</h6>
        </div>

        <div className='CoktailDay'>
          <div className='Main'>
            <h2 className='cod'>Suggestions of the day!</h2>
            <h5 className='date'>{this.calendar()}</h5>
            {
              this.state.randomCocktail
                ? (<p className='title-cod'>{'Today, discover the ' + this.state.randomCocktail.strDrink}</p>)
                : (<p className='load'>loading</p>)
            }
            <div className='descriptifcocktail'>
              <div className='ingredientcoktail'>
                <div className='cocktailcompo'>
                  <div className='Main-image'>
                    {
                      this.state.randomCocktail
                        ? (<img src={this.state.randomCocktail.strDrinkThumb} alt='cocktail of the day' />)
                        : (<p className='load'>Not found</p>)
                    }
                  </div>
                  <ul>
                    {this.ingredient()}
                  </ul>
                </div>
                <div className='type'>
                  {
                    this.drinkType()
                  }
                </div>
              </div>
              <div className='cocktailDescription'>
                <div className='instructions'>
                  {
                    this.state.randomCocktail
                      ? (<p className='text-cod'> {this.state.randomCocktail.strInstructions}</p>)
                      : (<p className='load'>loading</p>)
                  }
                </div>
                <div id='recipe'>
                  <button className='btn btn-lg' type='button' onClick={this.handleClick}>Try another<br />cocktail</button>
                </div>
              </div>
            </div>
          </div>
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
