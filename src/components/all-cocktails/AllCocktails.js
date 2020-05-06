import React from 'react';
import axios from 'axios';
import './AllCocktails.css';

class AllCocktails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      drinks: [],
      indexOfChoosenDrink: 0,
      filterIng: []
    };
    this.filterCocktails = this.filterCocktails.bind(this);
    this.filterIngredients = this.filterIngredients.bind(this);
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

  filterIngredients (selectedDrink) {
    const cocktail = this.state.drinks;

    if (!cocktail) {
      return <p>No cocktails yet</p>;
    } else {
      const filterIng = cocktail.map(c => {
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

        // renvoi du tableau cocktail avec les nouveaux states des éléments

        return {
          strDrink: c.strDrink,
          strDrinkThumb: c.strDrinkThumb,
          ingredients: cocktailIngredientList,
          strInstructions: c.strInstructions
        };
        // on attend un résultat qui ressemble à :
        // cocktail {
        //  strDrink: 'nom_cocktail',
        //   strDrinkThumb: 'url_img_cocktail',
        //   ingredients: {
        //     ingredient 1 - Measure 1,
        //     ingredient 2 - Measure 2
        //     ...
        //   },
        //   strInstructions: 'detail_recette'
        //   }
        //  });
      });
      console.log(filterIng[this.selectDrink(selectedDrink)]);
    }
  }

  selectDrink (selectedDrink) {
    const recipeElement = this.state.drinks;
    const indexOfChoosenDrink = recipeElement.findIndex(element => element.strDrink === selectedDrink); // j'obtiens l'index du nom du cocktail choisi dans l'array drinks (de la lettre déjà sélectionnée); En gros, en cliquant dessus la boisson, findIndex() va alors trouver son index dans l'array (this.state.drinks)
    return (indexOfChoosenDrink);
  }

  // il permet de faire appel au clic à la fonction filterIngredients() qui affichera le contenu necessaire à la fabrication du cocktail.

  filterCocktails () {
    const cocktailList = this.state.drinks; // <--Avec le nouvel état obtenu par la fonction changeFilterLetter
    if (!cocktailList) {
      return <p>No cocktails yet</p>; // s'il n'y a pas de cocktail correspondant à la lettre selectionnée on renvoie la chaine de caractère renseignée.
    } else { // dans le cas où il y a bien un ou des cocktails existants, on utilise map.
      return cocktailList.map(cocktail => // map nous permet de parcourir chaque objet du tableau cocktailList et pour chaque objet parcouru de créer un bouton.
        <li key={cocktail.strDrink}>
          <button
            type='button'
            onClick={(e) => {const selectedDrink = e.target.textContent;this.filterIngredients(selectedDrink);}}
          >{cocktail.strDrink}
          </button>
        </li>);
    }
  }

  render () {
    return (
      <main>
        <section>
          <article className='search'>
            <h2>Search by name</h2>
          </article>

          <article>
            <h3>Alcohol</h3>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='a'>A</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='b'>B</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='c'>C</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='d'>D</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='e'>E</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='f'>F</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='g'>G</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='h'>H</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='i'>I</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='j'>J</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='k'>K</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='l'>L</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='m'>M</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='n'>N</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='o'>O</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='p'>P</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='q'>Q</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='r'>R</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='s'>S</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='t'>T</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='u'>U</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='v'>V</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='w'>W</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='x'>X</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='y'>Y</button>
            <button className='lettreClass' onClick={this.changeFilterLetter.bind(this)} value='z'>Z</button>
            {this.filterCocktails()}
            <div>{this.filterIngredients()}</div>
          </article>
        </section>
      </main>
    );
  }
}

export default AllCocktails;
