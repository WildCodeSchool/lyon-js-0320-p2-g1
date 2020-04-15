import React from 'react';
import './FindYourCocktail.css';
import Bar from '../../img/bar.jpg';

class FindYourCocktail extends React.Component {
  render () {
    return (
      <main className='desktop'>
        <aside>
          <figure>
            <img className='bar' src={Bar} alt='bar' />
          </figure>
        </aside>
        <section>
          <article>
            <h1>Find Your Cocktail</h1>
            <p>What do you have in your fridge ? For sure there is a cocktail that matches it !</p>
            <p>Let's try our faboulous tools to tell you what cocktail you can do with your home ingredients</p>
          </article>
          <article>
            <h2>Search by ingredient</h2>
            <div>Alcohol</div>
            <hr />
            <ul>
              <li>Rhum</li>
              <li>Gin</li>
              <li>Whisky</li>
              <li>Vodka</li>
            </ul>
            <div>Fruits</div>
            <hr />
            <ul>
              <li>Orange</li>
              <li>Ananas</li>
              <li>Strawberry</li>
              <li>Passion fruit</li>
            </ul>
            <div>Othes</div>
            <hr />
            <ul>
              <li>Coffee</li>
              <li>Sparkling Water</li>
              <li>Coca-Cola</li>
            </ul>
            <button>Find My Cocktails</button>
          </article>
        </section>
      </main>
    );
  }
}

export default FindYourCocktail;
