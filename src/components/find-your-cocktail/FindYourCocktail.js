import React from 'react';
import './FindYourCocktail.css';
import Bar from '../../images/bar.jpg';
import axios from 'axios';

class FindYourCocktail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      drinks: [],
      isActive: false
    };
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

            <h3 className=' mt-2 text-center'>Alcohol</h3>
            <hr />
            <ul className='d-flex flex-wrap list-unstyled justify-content-center'>
              <li>Test</li>
            </ul>

            <h3 className='mt-6 text-center'>Fruits</h3>
            <hr />
            <ul className='d-flex flex-wrap list-unstyled justify-content-center'>
              <li>Test</li>
            </ul>

            <h3 className='mt-6 text-center'>Others</h3>
            <hr />
            <ul className='d-flex flex-wrap list-unstyled justify-content-center'>
              <li>Test</li>
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
