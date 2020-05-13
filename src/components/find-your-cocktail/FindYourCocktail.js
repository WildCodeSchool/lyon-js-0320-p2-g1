import React from 'react';
import './FindYourCocktail.css';
import Banner from '../../images/banner-finder.jpg';
import { alcoholsList, fruitsList, othersList } from '../../data/ingredients';
import Axios from 'axios';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MyVerticallyCenteredModal (props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Recipe details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.modalContent &&
          <>
            <h4>{props.modalContent.strDrink}</h4>
            <p>{props.modalContent.strInstructions}</p>
            <img src={props.modalContent.strDrinkThumb} alt={props.modalContent.strDrink} />
          </>}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

class FindYourCocktail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      toggleView: false,
      activeIngredientsList: [],
      cocktailsIdsByIngredients: {},
      cocktailsResultsList: null,
      activeResultTab: null,
      modalShow: false,
      modalContent: null
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
    this.handleGetAllResults();
    this.setState({ toggleView: true });
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
    Promise.all(resultIds.map(cocktailId => {
      return (
        Axios
          .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
          .then(response => {
            this.setState({ cocktailsResultsList: this.state.cocktailsResultsList.concat(response.data.drinks) });
          })
      );
    })).then(window.scrollTo(0, 0));
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
      <article className='col-12 col-lg-8'>

        <section>
          <h1 className='text-center m-4'>Find Your Cocktail</h1>
          <img className='banner mb-4 d-lg-none d-block' src={Banner} alt='cockails' />
          <p className='m-3 text-center'>What do you have in your fridge ? For sure there is a cocktail that matches it !</p>
          <p className='m-2 text-center'>Let's try our faboulous tools to tell you what cocktail you can do with your home ingredients.</p>
        </section>

        <section className='search'>
          <h3 className='m-2 p-4'>Choose your ingredient</h3>
        </section>

        <section>
          <div>
            <h3 className=' mt-2 text-center'>Alcohol</h3>
            <hr />
            <ul className='d-flex flex-wrap list-unstyled justify-content-center'>
              {alcoholsList.map(alcohol =>
                <li
                  className={this.state.activeIngredientsList.includes(alcohol.name) ? 'alcohols status-active col-9 col-md-4 col-lg-2 m-1 p-2' : 'alcohols status-inactive col-9 col-md-4 col-lg-2 m-1 p-2'}
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
                  className={this.state.activeIngredientsList.includes(fruit.name) ? 'fruits status-active col-9 col-md-4 col-lg-2 m-1 p-2' : 'fruits status-inactive col-9 col-md-4 col-lg-2 m-1 p-2'}
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
                  className={this.state.activeIngredientsList.includes(other.name) ? 'others status-active col-9 col-md-4 col-lg-2 m-1 p-2' : 'others status-inactive col-9 col-md-4 col-lg-2 m-1 p-2'}
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
      <article className='col-12 col-lg-8'>

        <section>
          <h2 className='text-center m-3'>Results</h2>
          <img className='banner d-lg-none d-block' src={Banner} alt='cockails' />
          <p className='m-3 text-center'>Let's find the perfect cocktail now ! </p>
          <ul className='result-ing'>
            <li className={(this.state.activeResultTab === 'All') ? 'result-ing-item active' : 'result-ing-item'} onClick={this.handleGetAllResults}>All ingredients results</li>
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
            <li className='go-back-ing-list' onClick={this.handleBackButton}>Back to ingredients</li>
          </ul>
        </section>

        <section className='results'>
          <ul className='d-flex flex-wrap list-unstyled justify-content-center'>
            {this.state.cocktailsResultsList.map(cocktail => {
              return (
                <li
                  onClick={() => this.setState({ modalShow: true, modalContent: cocktail })}
                  className='card col-10 col-md-5 col-lg-3 m-1 p-2'
                  key={cocktail.idDrink}
                >
                  <img className='card-img-top' src={cocktail.strDrinkThumb} alt={cocktail.idDrink} />
                  <div className='card-body'>
                    <p className='card-title'>{cocktail.strDrink}</p>
                  </div>
                </li>
              );
            })}
            <MyVerticallyCenteredModal
              modalContent={this.state.modalContent}
              show={this.state.modalShow}
              onHide={() => this.setState({
                modalShow: false
              })}
            />
          </ul>
        </section>

        <section className='d-flex flex-column'>
          <p className='mx-auto text-center'>Go back to ingredients list to make a new search !</p>
          <button type='button' className='button' onClick={this.handleBackButton}>Back to ingredients</button>
        </section>
        <ScrollUpButton />

      </article>
    );
  }

  handleBackButton () {
    window.scrollTo(0, 0);
    this.setState({ toggleView: false });
    this.setState({ activeIngredientsList: [] });
    this.setState({ cocktailsIdsByIngredients: {} });
    this.setState({ cocktailsResultsList: [] });
    this.setState({ activeResultTab: null });
  }

  render () {
    return (
      <main className='d-flex'>
        <aside className='bar d-none col-4 d-lg-block' />
        {this.state.toggleView ? this.showResults() : this.showIngredients()}
      </main>
    );
  }
}

export default FindYourCocktail;
