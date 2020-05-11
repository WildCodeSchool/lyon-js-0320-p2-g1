import React from 'react';
import './FindYourCocktail.css';
import Bar from '../../images/bar-2.jpg';
import Banner from '../../images/banner-finder.jpg';
import { alcoholsList, fruitsList, othersList } from '../../data/ingredients';
import Axios from 'axios';

class FindYourCocktail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      toggleView: false,
      activeIngredientsList: [],
      cocktailsIdsByIngredients: {},
      cocktailsResultsList: [],
      activeResultTab: null
    };
    this.toggleSelectedItems = this.toggleSelectedItems.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
    this.handleGetAllResults = this.handleGetAllResults.bind(this);
    this.handleGetIngredientResults = this.handleGetIngredientResults.bind(this);
  }

  toggleSelectedItems (selectedIngredient) {
    if (this.state.activeIngredientsList.includes(selectedIngredient)) {
      this.setState({ activeIngredientsList: this.state.activeIngredientsList.filter(ingredient => ingredient !== selectedIngredient) });
      Axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selectedIngredient}`)
        .then(response => {
          const IngredientIds = [];
          response.data.drinks.forEach(cocktail => {
            Object.keys(cocktail).forEach(key => {
              if (key === 'idDrink') {
                IngredientIds.push(cocktail.idDrink);
              }
            });
          });
          this.setState({ cocktailsIdsByIngredients: { ...this.state.cocktailsIdsByIngredients, [selectedIngredient]: [] } });
        });
    } else {
      this.setState({ activeIngredientsList: [...this.state.activeIngredientsList, selectedIngredient] });
      Axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selectedIngredient}`)
        .then(response => {
          const IngredientIds = [];
          response.data.drinks.forEach(cocktail => {
            Object.keys(cocktail).forEach(key => {
              if (key === 'idDrink') {
                IngredientIds.push(cocktail.idDrink);
              }
            });
          });
          this.setState({ cocktailsIdsByIngredients: { ...this.state.cocktailsIdsByIngredients, [selectedIngredient]: IngredientIds } });
        });
    }
  }

  handleSubmit () {
    this.setState({ toggleView: true });
    this.handleGetAllResults();
  }

  handleGetAllResults () {
    this.setState({ activeResultTab: 'All' });
    const _ = require('lodash/array');
    this.setState({ cocktailsResultsList: [] });
    let resultIds = [];
    Object.keys(this.state.cocktailsIdsByIngredients).forEach(ingredient => {
      this.state.cocktailsIdsByIngredients[ingredient].forEach(id => resultIds.push(id));
    });
    resultIds = _.uniq(resultIds);
    resultIds.forEach(cocktailId => {
      Axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
        .then(response => {
          this.setState({ cocktailsResultsList: this.state.cocktailsResultsList.concat(response.data.drinks) });
        });
    });
  }

  handleGetIngredientResults (selectedIngredient) {
    this.setState({ activeResultTab: selectedIngredient });
    this.setState({ cocktailsResultsList: [] });
    const resultIds = [];
    Object.keys(this.state.cocktailsIdsByIngredients).forEach(ingredient => {
      if (ingredient === selectedIngredient) {
        this.state.cocktailsIdsByIngredients[ingredient].forEach(id => resultIds.push(id));
      }
    });
    resultIds.forEach(cocktailId => {
      Axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
        .then(response => {
          this.setState({ cocktailsResultsList: this.state.cocktailsResultsList.concat(response.data.drinks) });
        });
    });
  }

  showIngredients () {
    return (
      <article className='content col-12 col-lg-8'>

        <section>
          <h1 className='text-center m-4'>Find Your Cocktail</h1>
          <img className='banner d-lg-none d-block' src={Banner} alt='cockails' />
          <p className='px-4 text-center'>What do you have in your fridge ? For sure there is a cocktail that matches it !</p>
          <p className='px-4 text-center'>Let's try our faboulous tools to tell you what cocktail you can do with your home ingredients.</p>
        </section>

        <section className='search'>
          <h3 className='m-3 p-4'>Choose your ingredient</h3>
        </section>

        <section>
          <div>
            <h3 className=' mt-2 text-center'>Alcohol</h3>
            <hr />
            <ul className='d-flex flex-wrap list-unstyled justify-content-center'>
              {alcoholsList.map(alcohol =>
                <li
                  className={this.state.activeIngredientsList.includes(alcohol.name) ? 'alcohols status-active col-4 m-1 col-lg-2 p-2' : 'alcohols status-inactive col-4 m-1 col-lg-2 p-2'}
                  key={alcohol.name}
                  onClick={() => {
                    this.toggleSelectedItems(alcohol.name);
                  }}
                >
                  {alcohol.name}
                </li>)}
            </ul>
          </div>
          <div>
            <h3 className='mt-6 text-center'>Fruits</h3>
            <hr />
            <ul className='d-flex flex-wrap list-unstyled justify-content-center'>
              {fruitsList.map(fruit =>
                <li
                  className={this.state.activeIngredientsList.includes(fruit.name) ? 'fruits status-active col-4 m-1 col-lg-2 p-2' : 'fruits status-inactive col-4 m-1 col-lg-2 p-2'}
                  key={fruit.name}
                  onClick={() => {
                    this.toggleSelectedItems(fruit.name);
                  }}
                >
                  {fruit.name}
                </li>)}
            </ul>
          </div>
          <div>
            <h3 className='mt-6 text-center'>Others</h3>
            <hr />
            <ul className='d-flex flex-wrap list-unstyled justify-content-center'>
              {othersList.map(other =>
                <li
                  className={this.state.activeIngredientsList.includes(other.name) ? 'others status-active col-4 m-1 col-lg-2 p-2' : 'others status-inactive col-4 m-1 col-lg-2 p-2'}
                  key={other.name}
                  onClick={() => {
                    this.toggleSelectedItems(other.name);
                  }}
                >
                  {other.name}
                </li>)}
            </ul>
          </div>
        </section>

        <section className='d-flex flex-column'>
          <p className='mx-auto'>Now click the button down below to get your matching recipe !</p>
          <button type='button' className='button' onClick={this.handleSubmit}>Find My Cocktails</button>
        </section>

      </article>
    );
  }

  showResults () {
    return (
      <article className='content col-12 col-lg-8'>

        <section>
          <h1 className='text-center m-5'>Find Your Cocktail</h1>
          <img className='banner d-lg-none d-block' src={Banner} alt='cockails' />
          <h2 className='text-center m-3'>Results</h2>
          <p className='m-3 px-4 text-center'>All recipes contains one of the previous selected ingredients. You can switch beetween ingredient to have recipes relative to one ingredient.</p>
          <p className='m-3 px-4 text-center'>Let's find the perfect cocktail now ! </p>
          <ul className='result-ing'>
            <li className={(this.state.activeResultTab === 'All') ? 'result-ing-item active' : 'result-ing-item'} onClick={this.handleGetAllResults}>All results</li>
            {this.state.activeIngredientsList.map(ingredient => {
              return (
                <li
                  className={(this.state.activeResultTab === ingredient) ? 'result-ing-item active' : 'result-ing-item'}
                  key={ingredient}
                  onClick={e => {
                    this.handleGetIngredientResults(ingredient);
                  }}
                >
                  {ingredient}
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <ul className='d-flex flex-wrap list-unstyled justify-content-center'>
            {this.state.cocktailsResultsList.map(cocktail => {
              return (
                <li
                  className='card col-6 m-1 col-lg-2 p-2'
                  key={cocktail.idDrink}
                >
                  <img className='card-img-top' src={cocktail.strDrinkThumb} alt={cocktail.idDrink} />
                  <div className='card-body'>
                    <p className='card-title'>{cocktail.strDrink}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className='d-flex flex-column'>
          <p className='mx-auto text-center'>Go back to ingredients list to make a new search !</p>
          <button type='button' className='button' onClick={this.handleBackButton}>Back to ingredients</button>
        </section>

      </article>
    );
  }

  handleBackButton () {
    this.setState({ toggleView: false });
    this.setState({ activeIngredientsList: [] });
    this.setState({ cocktailsIdsByIngredients: {} });
    this.setState({ cocktailsResultsList: [] });
    this.setState({ activeResultTab: null });
  }

  render () {
    return (
      <main className='d-flex'>

        <aside className='col-4 p-0 d-none d-lg-block'>
          <figure>
            <img className='bar' src={Bar} alt='bar' />
          </figure>
        </aside>

        {this.state.toggleView ? this.showResults() : this.showIngredients()}

      </main>
    );
  }
}

export default FindYourCocktail;
