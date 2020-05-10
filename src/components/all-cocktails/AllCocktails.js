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
          listIngredients: function(){

            const result = this.ingredients.map(el => 
            {
              if(el.name != null || el.measure != null){
                return (
                  <div>
                    {(el.name + ' - ' + el.measure).toString().replace('- null', '')}<br/>
                  </div>
                )
              }else{
                return null
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
  handleClick(e){
    const selectedDrinkFromClick = e.target.textContent;
    this.filterIngredients(selectedDrinkFromClick);

            if (this.filterIngredients) {
            this.setState({
                filterIng : this.setState.filterIng = this.filterIng,
                indexOfChoosenDrink: this.setState.indexOfChoosenDrink = this.selectDrink(selectedDrinkFromClick)
            }
            ,
              () => {
                console.log('Callback value ==========>', this.filterIng[this.selectDrink(selectedDrinkFromClick)],
                            'Selected index ==========>', this.selectDrink(selectedDrinkFromClick))
              }
            );
        }else{
          console.log('Error, could not setState.');
        }
  }

  // il permet de faire appel au clic à la fonction filterIngredients() qui affichera le contenu necessaire à la fabrication du cocktail.
  filterCocktails () {
    const cocktailList = this.state.drinks; // <--Avec le nouvel état obtenu par la fonction changeFilterLetter
    if (!cocktailList) {
      return <p>No cocktails yet</p>; // s'il n'y a pas de cocktail correspondant à la lettre selectionnée on renvoie la chaine de caractère renseignée.
    } else { // dans le cas où il y a bien un ou des cocktails existants, on utilise map.
      return cocktailList.map(cocktail => // map nous permet de parcourir chaque objet du tableau cocktailList et pour chaque objet parcouru de créer un bouton.
          <button
            type='button'
            className='btn btn-light'
            key={cocktail.strDrink}
            // onClick={(e) => { const selectedDrink = e.target.textContent; this.filterIngredients(selectedDrink); }}
            onClick={this.handleClick}
          >{cocktail.strDrink} 
          </button>);
    }
  }

  
  renderObject(){   
    if (this.filterIng) {

      if (this.state.filterIng.length > 0) {
        // console.log(this.state.filterIng[this.state.indexOfChoosenDrink].strDrink);
        return (
          <div>            
            <div><img alt={this.state.filterIng[this.state.indexOfChoosenDrink].strDrinkThumb} src={this.state.filterIng[this.state.indexOfChoosenDrink].strDrinkThumb}></img></div>
            <div><h3>{this.state.filterIng[this.state.indexOfChoosenDrink].strDrink}</h3></div>
            <div>{this.state.filterIng[this.state.indexOfChoosenDrink].listIngredients()}</div>
            {/* Optimisation possible pour ingrédient, il faut juste faire une boucle ou eventuellement un filtre ou un startwith.. */}
            <div>{'Instructions : '+this.state.filterIng[this.state.indexOfChoosenDrink].strInstructions}</div>
          </div>
          
        )
      }

    } else {
      return <div>Please select your drink</div>;
    }
    
  }

  render () {
    return (
      <main>

        <div className='globalContainer'>
          <div>
            <section className='col-8'>
              <section>
                <article className='introContainer'>
                    <h1 className='text-center m-5'>All our cocktails</h1>
                    <p className='px-4 text-center'>You already have a cocktail in mind and you want to find it ? </p>
                    <p className='px-4 text-center'>Go ahead and find it by its first letter.</p>
                </article>

                <article>

                  <article className='search'>
                    <h3 className='m-3 p-4 section-title'>Search by first letter</h3>
                  </article>

                    <div className='btn-group'>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='a'>A</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='b'>B</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='c'>C</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='d'>D</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='e'>E</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='f'>F</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='g'>G</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='h'>H</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='i'>I</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='j'>J</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='k'>K</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='l'>L</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='m'>M</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='n'>N</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='o'>O</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='p'>P</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='q'>Q</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='r'>R</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='s'>S</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='t'>T</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='u'>U</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='v'>V</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='w'>W</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='x'>X</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='y'>Y</button>
                      <button className='lettreClass btn btn-dark' onClick={this.changeFilterLetter.bind(this)} value='z'>Z</button>
                    </div><br/>
                    <div className='btn-group-vertical cocktailNameContainer'>
                      {this.filterCocktails()}                  
                    </div>
                    <div>
                      {this.renderObject()}
                    </div>
                </article>

              </section>

            </section>
          </div>
        </div>
      </main>
    );
  }
}

export default AllCocktails;
