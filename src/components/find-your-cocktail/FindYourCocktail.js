import React from 'react';
import './FindYourCocktail.css';
import Bar from '../../images/bar.jpg';
import ingredients from '../../data/ingredients';

const alcoholsList = ({ name, category }) => {
  if (category === 'Alcohol') {
    return (
      <li className='alcohols col-4 m-1 col-lg-2 p-2' key={name}>{name}</li>
    );
  }
};

const fruitsList = ({ name, category }) => {
  if (category === 'Fruit') {
    return (
      <li className='fruits col-4 m-1 col-lg-2 p-2' key={name}>{name}</li>
    );
  }
};

const othersList = ({ name, category }) => {
  if (category === 'Other') {
    return (
      <li className='others col-4 m-1 col-lg-2 p-2' key={name}>{name}</li>
    );
  }
};

class FindYourCocktail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isActive: false
    };
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
            <h3 className='m-3 p-4'>Choose your ingredient</h3>
          </article>

          <article>

            <h3 className=' mt-2 text-center'>Alcohol</h3>
            <hr />
            <ul className='d-flex flex-wrap list-unstyled justify-content-center'>
              {ingredients.map(alcoholsList)}
            </ul>

            <h3 className='mt-6 text-center'>Fruits</h3>
            <hr />
            <ul className='d-flex flex-wrap list-unstyled justify-content-center'>
              {ingredients.map(fruitsList)}
            </ul>

            <h3 className='mt-6 text-center'>Others</h3>
            <hr />
            <ul className='d-flex flex-wrap list-unstyled justify-content-center'>
              {ingredients.map(othersList)}
            </ul>

          </article>

          <article className='d-flex flex-column'>
            <p className='mx-auto'>Now click the button down below to get your matching recipe !</p>
            <button type='button' className='button'>Find My Cocktails</button>
          </article>

        </section>
      </main>
    );
  }
}

export default FindYourCocktail;
