import React from 'react';
import './FindYourCocktail.css';
import Bar from '../../images/bar.jpg';
import axios from 'axios';

class FindYourCocktail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      drinks: []
    };
    this.filterAlcohols = this.filterAlcohols.bind(this);
    this.filterFruits = this.filterFruits.bind(this);
    this.filterOthers = this.filterOthers.bind(this);
  }

  componentDidMount () {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then((response) => {
        this.setState({ drinks: response.data.drinks });
      }, (error) => {
        console.log(error);
      });
  }

  filterAlcohols () {
    let alcoholsList = this.state.drinks.slice(0, 16);
    alcoholsList = alcoholsList.concat(this.state.drinks.slice(17, 24));
    alcoholsList = alcoholsList.concat(this.state.drinks.slice(25, 26));
    alcoholsList = alcoholsList.concat(this.state.drinks.slice(27, 28));
    alcoholsList = alcoholsList.concat(this.state.drinks.slice(29, 31));
    alcoholsList = alcoholsList.concat(this.state.drinks.slice(32, 33));
    alcoholsList = alcoholsList.concat(this.state.drinks.slice(35, 39));
    alcoholsList = alcoholsList.concat(this.state.drinks.slice(40, 44));
    alcoholsList = alcoholsList.concat(this.state.drinks.slice(63, 66));
    alcoholsList = alcoholsList.concat(this.state.drinks.slice(67, 68));
    alcoholsList = alcoholsList.concat(this.state.drinks.slice(73, 76));
    alcoholsList = alcoholsList.concat(this.state.drinks.slice(84, 94));
    alcoholsList = alcoholsList.concat(this.state.drinks.slice(96, 100));
    return alcoholsList.map(alcohol => <li key={alcohol.strIngredient1}>{alcohol.strIngredient1}</li>);
  }

  filterFruits () {
    let fruitsList = this.state.drinks.slice(28, 29);
    fruitsList = fruitsList.concat(this.state.drinks.slice(39, 40));
    fruitsList = fruitsList.concat(this.state.drinks.slice(44, 47));
    fruitsList = fruitsList.concat(this.state.drinks.slice(49, 50));
    fruitsList = fruitsList.concat(this.state.drinks.slice(52, 53));
    fruitsList = fruitsList.concat(this.state.drinks.slice(54, 60));
    fruitsList = fruitsList.concat(this.state.drinks.slice(71, 73));
    fruitsList = fruitsList.concat(this.state.drinks.slice(76, 77));
    fruitsList = fruitsList.concat(this.state.drinks.slice(79, 82));
    return fruitsList.map(fruits => <li key={fruits.strIngredient1}>{fruits.strIngredient1}</li>);
  }

  filterOthers () {
    let othersList = this.state.drinks.slice(16, 17);
    othersList = othersList.concat(this.state.drinks.slice(24, 25));
    othersList = othersList.concat(this.state.drinks.slice(26, 27));
    othersList = othersList.concat(this.state.drinks.slice(31, 32));
    othersList = othersList.concat(this.state.drinks.slice(33, 35));
    othersList = othersList.concat(this.state.drinks.slice(47, 49));
    othersList = othersList.concat(this.state.drinks.slice(50, 52));
    othersList = othersList.concat(this.state.drinks.slice(53, 54));
    othersList = othersList.concat(this.state.drinks.slice(60, 63));
    othersList = othersList.concat(this.state.drinks.slice(66, 67));
    othersList = othersList.concat(this.state.drinks.slice(68, 71));
    othersList = othersList.concat(this.state.drinks.slice(77, 79));
    othersList = othersList.concat(this.state.drinks.slice(82, 84));
    othersList = othersList.concat(this.state.drinks.slice(94, 96));
    return othersList.map(others => <li key={others.strIngredient1}>{others.strIngredient1}</li>);
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
          </article>

          <article className='search'>
            <h3 className='m-3 p-4'>Search by ingredient</h3>
          </article>

          <article>

            <h3 className='text-center'>Alcohol</h3>
            <hr />
            <ul>
              {this.filterAlcohols()}
            </ul>

            <h3 className='text-center'>Fruits</h3>
            <hr />
            <ul>
              {this.filterFruits()}
            </ul>

            <h3 className='text-center'>Others</h3>
            <hr />
            <ul>
              {this.filterOthers()}
            </ul>

            <button>Find My Cocktails</button>

          </article>

        </section>
      </main>
    );
  }
}

export default FindYourCocktail;
