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
      activeIngredientsList: [],
      cocktailsIdsByIngredients: {},
      showResults: false,
      cocktailsResultsList: []
    };
    this.toogleSelectedItems = this.toogleSelectedItems.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toogleSelectedItems (selectedIngredient) {
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
    const _ = require('lodash/array');
    let resultIds = [];
    Object.keys(this.state.cocktailsIdsByIngredients).forEach(ingredient => {
      this.state.cocktailsIdsByIngredients[ingredient].forEach(id => resultIds.push(id));
    });
    resultIds = _.uniq(resultIds);
    this.setState({ showResults: true });
    resultIds.forEach(cocktailId => {
      Axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
        .then(response => {
          this.setState({ cocktailsResultsList: this.state.cocktailsResultsList.concat(response.data.drinks) });
        });
    });
  }
  /*
  showAllResults () {
    const _ = require('lodash/array');
    let allResultIds = [];
    Object.keys(this.state.cocktailsIdsByIngredients).forEach(ingredient => {
      this.state.cocktailsIdsByIngredients[ingredient].forEach(id => allResultIds.push(id));
    });
    allResultIds = _.uniq(allResultIds);
    this.setState({ showResults: true });
    allResultIds.forEach(cocktailId => {
      Axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
        .then(response => {
          this.setState({ cocktailsResultsList: this.state.cocktailsResultsList.concat(response.data.drinks) });
        });
    });
  }
  */

  render () {
    return (
      <main className='d-flex'>

        <aside className='col-4 p-0 d-none d-lg-block'>
          <figure>
            <img className='bar' src={Bar} alt='bar' />
          </figure>
        </aside>

        <article className='content col-12 col-lg-8'>

          <section>
            <h1 className='text-center m-5'>Find Your Cocktail</h1>
            <p className='px-4 text-center'>What do you have in your fridge ? For sure there is a cocktail that matches it !</p>
            <p className='px-4 text-center'>Let's try our faboulous tools to tell you what cocktail you can do with your home ingredients.</p>
            <img className='banner d-lg-none d-block' src={Banner} alt='cockails' />
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
                      this.toogleSelectedItems(alcohol.name);
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
                      this.toogleSelectedItems(fruit.name);
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
                      this.toogleSelectedItems(other.name);
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

          <section>
            <ul className='d-flex flex-wrap list-unstyled justify-content-center'>
              {this.state.showResults
                ? this.state.cocktailsResultsList.map(cocktail => {
                  return (
                    <li
                      className='col-4 m-3 col-lg-2 p-2'
                      key={cocktail.idDrink}
                    >
                      <p className='text-center'>{cocktail.strDrink}</p>
                      <img className='img-fluid' src={cocktail.strDrinkThumb} alt={cocktail.idDrink} />
                    </li>
                  );
                })
                : ''}
            </ul>

          </section>

        </article>
      </main>
    );
  }
}

export default FindYourCocktail;
