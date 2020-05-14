import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './AllCocktails.css';

class AllCocktails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      drinks: [],
      indexOfChoosenDrink: 0,
      filterIng: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a') // initialisation de la page à la lettre 'a'
      .then((response) => {
        this.setState({ drinks: response.data.drinks });
      }, (error) => {
        console.log(error);
      });
  }

  changeFilterLetter (e) {
    e.preventDefault();
    const letter = e.target.value;

    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((response) => {
        this.setState({ drinks: response.data.drinks }); // Si l'on obtient une réponse de la part de l'api, on change l'état
      }, (error) => {
        console.log(error);
      });
  }

  filterIngredients () {
    const cocktail = this.state.drinks;
    // let filterIng = {};
    if (!cocktail) {
      return '';
    } else {
      this.filterIng = cocktail.map(c => {
        const cocktailIngredientList = [];
        Object.keys(c).forEach(key => {
          // 'Object.keys' est utilisé pour parcourir un objet, le '(c)' représente l'élément parcouru.
          const ingredient = {}; // ingredient est initialisé en un objet, vide à ce moment;
          // if (key.startsWith('strIngredient')) : signifie si le nom commence par strIngredient
          if (key.startsWith('strIngredient')) {
            const ingredientNumber = key.split('strIngredient')[1]; // split permet de couper/supprimer le mot strIngredient pour isoler le nombre. ('[1]' représente l'élément suivant et '[0]' représente 'strIngredient');
            // ('strIngredient1' avant split, et '1' après split.);

            ingredient.name = c[key]; // dans c[key], le 'c' représente l'objet cocktail, et le '[key]' permet de récupérer le nom de l'objet, au final ça renvoie le nom.
            ingredient.measure = c['strMeasure' + ingredientNumber];
          }
          cocktailIngredientList.push(ingredient); // on récupère le contenu de ingredient (déterminé juste au dessus) et on le met dans le tableau 'cocktailIngredientList';
        });

        // permet de créer le tableau avec les éléments du map
        return {
          strDrink: c.strDrink,
          strDrinkThumb: c.strDrinkThumb,
          ingredients: cocktailIngredientList,
          strInstructions: c.strInstructions,
          listIngredients: function () {
            const result = this.ingredients.map((el, index) => {
              if (el.name != null || el.measure != null) {
                return (
                  <div key={index}>
                    {(el.name + ' - ' + el.measure).toString().replace('- null', '')}<br />
                  </div>
                );
              } else {
                return null;
              }
            });
            return result;
          }
        };
      });
    }
  }

  selectDrink (selectedDrink) {
    const recipeElement = this.state.drinks;
    const indexOfChoosenDrink = recipeElement.findIndex(element => element.strDrink === selectedDrink);

    // j'obtiens l'index du nom du cocktail choisi dans l'array drinks (de la lettre déjà sélectionnée); En gros, en cliquant dessus la boisson, findIndex() va alors trouver son index dans l'array (this.state.drinks)
    // console.log('selectDrink renvoie : '+indexOfChoosenDrink)
    return (indexOfChoosenDrink);
  }

  // Fonction qui permet de faire les setState quand on clic dessus le cocktail désiré
  handleClick (e) {
    const selectedDrinkFromClick = e.target.textContent;
    this.filterIngredients(selectedDrinkFromClick);

    if (this.filterIngredients) {
      this.setState({
        filterIng: this.setState.filterIng = this.filterIng,
        indexOfChoosenDrink: this.setState.indexOfChoosenDrink = this.selectDrink(selectedDrinkFromClick)
      });
    } else {
      console.log('Error, could not setState.');
    }
  }

  // il permet de faire appel au clic à la fonction filterIngredients() qui affichera le contenu necessaire à la fabrication du cocktail.
  filterCocktails () {
    const cocktailList = this.state.drinks; // <--Avec le nouvel état obtenu par la fonction changeFilterLetter
    if (!cocktailList) {
      return <p>No cocktails yet</p>; // s'il n'y a pas de cocktail correspondant à la lettre selectionnée on renvoie la chaine de caractère renseignée.
    } else { // dans le cas où il y a bien un ou des cocktails existants, on utilise map.
      return cocktailList.map((cocktail, index) => // map nous permet de parcourir chaque objet du tableau cocktailList et pour chaque objet parcouru de créer un bouton.

      // return cocktailList.map((cocktail, index) => // map nous permet de parcourir chaque objet du tableau cocktailList et pour chaque objet parcouru de créer un bouton.



        <button
          type='button'
          className='btn btn-light'
          key={index}
          // onClick={(e) => { const selectedDrink = e.target.textContent; this.filterIngredients(selectedDrink); }}
          onClick={this.handleClick}
        >{cocktail.strDrink}
        </button>);
    }
  }

  renderObject () {
    if (this.filterIng) {
      if (this.state.filterIng.length > 0) {
        return (
          <Card className='cocktailCard'>
            <Card.Img variant='top' alt={this.state.filterIng[this.state.indexOfChoosenDrink].strDrinkThumb} src={this.state.filterIng[this.state.indexOfChoosenDrink].strDrinkThumb} />
            <Card.Body>
              <Card.Title>{this.state.filterIng[this.state.indexOfChoosenDrink].strDrink}</Card.Title>
            </Card.Body>
            <ListGroup className='list-group-flush'>
              <ListGroupItem className='backgroundCard'>{this.state.filterIng[this.state.indexOfChoosenDrink].listIngredients()}</ListGroupItem>
              {/* Optimisation possible pour ingrédient, il faut juste faire une boucle ou eventuellement un filtre ou un startwith.. */}
              <ListGroupItem className='backgroundCard'>{this.state.filterIng[this.state.indexOfChoosenDrink].strInstructions}</ListGroupItem>
            </ListGroup>
          </Card>
        );
      }
    } else {
      return <div className='askSelection'>Please select your drink</div>;
    }
  }

  render () {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return (
      <main className='mainAllCocktails'>

        <aside className='cocktail d-none col-4 d-lg-block' />

        <article className='col-12 col-lg-8 articleCocktail'>

          <section>
            <h1 className='text-center m-5 title pageInfos'>All our cocktails</h1>
            <p className='px-4 text-center pageInfos'>You already have a cocktail in mind and you want to find it ? </p>
            <p className='px-4 text-center pageInfos'>Go ahead and find it by its first letter.</p>
          </section>

          <section className='sectionTitleContainer'>
            <h3 className='my-3 p-4 section-title search'>Search by first letter</h3>
          </section>

          <section className='callApiContainer'>
            <div className='btn-group alphaButton'>
              {letters.map((letter, index)=> {
                return (
                  <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value={letter} key={index}>{letter.toUpperCase()}</button>
                );
              })}
            </div><br />

            <div className='nameCardContainer'>
              <div className='btn-group-vertical'>
                {this.filterCocktails()}
              </div>
              <div className='cocktail-container'>
                {this.renderObject()}
              </div>
            </div>

          </section>
        </article>
      </main>
    );
  }
}

export default AllCocktails;