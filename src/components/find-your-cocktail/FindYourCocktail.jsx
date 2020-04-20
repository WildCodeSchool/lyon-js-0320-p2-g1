import React from 'react';
import './FindYourCocktail.css';
import Bar from '../../images/bar.jpg';

class FindYourCocktail extends React.Component {
  render () {
    return (
      <main className='d-flex'>

        <aside className='col-4 p-0 d-none d-lg-block'>
          <img className='bar' src={Bar} alt='bar' />
        </aside>

        <section className='col-8'>

          <article>
            <h1 className='text-center m-5'>Find Your Cocktail</h1>
            <p className='px-4 text-center'>What do you have in your fridge ? For sure there is a cocktail that matches it !</p>
            <p className='px-4 text-center'>Let's try our faboulous tools to tell you what cocktail you can do with your home ingredients.</p>
          </article>

          <article className='search'>
            <h3 className='m-3 p-4 section-title'>Search by ingredient</h3>
          </article>

          <article>

            <h3 className='text-center'>Alcohol</h3>
            <hr />
            <ul>
              <li>Rhum</li>
              <li>Gin</li>
              <li>Whisky</li>
              <li>Vodka</li>
            </ul>

            <h3 className='text-center'>Fruits</h3>
            <hr />
            <ul>
              <li>Orange</li>
              <li>Ananas</li>
              <li>Strawberry</li>
              <li>Passion fruit</li>
            </ul>

            <h3 className='text-center'>Others</h3>
            <hr />
            <ul>
              <li>Coffee</li>
              <li>Sparkling Water</li>
              <li>Coca-Cola</li>
            </ul>

            <div className='buttonContainer'>
              <button>Find My Cocktails</button>
            </div>
          </article>

        </section>
      </main>
    );
  }
}

export default FindYourCocktail;
