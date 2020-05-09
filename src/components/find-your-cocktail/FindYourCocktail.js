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
      cocktailsIdsByIngredients: []
    };
    this.toogleSelectedItems = this.toogleSelectedItems.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toogleSelectedItems (selectedIngredient) {
    if (this.state.activeIngredientsList.includes(selectedIngredient)) {
      this.setState({
        activeIngredientsList: this.state.activeIngredientsList.filter(ingredient => ingredient !== selectedIngredient)
      });
    } else {
      this.setState({ activeIngredientsList: [...this.state.activeIngredientsList, selectedIngredient] });
      Axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selectedIngredient}`)
        .then(response => {
          const ids = [];
          response.data.drinks.forEach(cocktail => {
            Object.keys(cocktail).forEach(key => {
              if (key === 'idDrink') {
                ids.push(cocktail.idDrink);
              }
            });
          });
          this.setState({ cocktailsIdsByIngredients: this.state.cocktailsIdsByIngredients.concat(ids) });
        });

      // this.setState({cocktailIdsByIngredient: {...this.state.cocktailIdsByIngredient, [ingredientName]: ingredientIds})
      // this.setState({cocktailIdsByIngredient: {...this.state.cocktailIdsByIngredient, [ingredientName]: [] })
      // this.setState({ cocktailsIdsByIngredients: [...this.state.cocktailsIdsByIngredients, ...ids] });
    }
  }

  handleSubmit () {
    // return all ids with _uniq lodash
  }

  render () {
    return (
      <main className='d-flex'>

        <aside className='col-4 p-0 d-none d-lg-block'>
          <figure>
            <img className='bar' src={Bar} alt='bar' />
          </figure>
        </aside>

        <section className='content col-12 col-lg-8'>

          <article>
            <h1 className='text-center m-5'>Find Your Cocktail</h1>
            <p className='px-4 text-center'>What do you have in your fridge ? For sure there is a cocktail that matches it !</p>
            <p className='px-4 text-center'>Let's try our faboulous tools to tell you what cocktail you can do with your home ingredients.</p>
            <img className='banner d-lg-none d-block' src={Banner} alt='cockails' />
          </article>

          <article className='search'>
            <h3 className='m-3 p-4'>Choose your ingredient</h3>
          </article>

          <article>

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

          </article>

          <article className='d-flex flex-column'>
            <p className='mx-auto'>Now click the button down below to get your matching recipe !</p>
            <button type='button' className='button' onClick={this.handleSubmit}>Find My Cocktails</button>
          </article>

        </section>
      </main>
    );
  }
}

export default FindYourCocktail;
