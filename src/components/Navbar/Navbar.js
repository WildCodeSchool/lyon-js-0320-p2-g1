import React from 'react';
import './Navbar.css';
import FindYourCocktail from '../FindYourCocktail/FindYourCocktail';
import AllCocktails from '../AllCocktails/AllCocktails';
import GuestBook from '../GuestBook/GuestBook';
import Quizz from '../Quizz/Quizz';
import Logo from '../../images/logo.jpg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Navbar () {
  return (
    <Router>
      <div>
		    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
          <a id='navbar-brand' href='#'><img src={Logo} id='logo' alt='logo'/> </a>
            <h1 className='navbar-brand'>Cocktail Finder</h1>
              {/* C'est le bouton burger (navbar-toggler) */}
            <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarColor01' aria-controls='navbarColor01' aria-expanded='false' aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarColor01'>
				      <ul className='navbar-nav mr-auto '>
					      <li className='nav-item active'><Link to='/' className='nav-link float-right'>Home</Link></li>
					      <li className='nav-item'><Link to='/Find-your-cocktail' className='nav-link float-right'>Find your cocktail</Link></li>
					      <li className='nav-item'><Link to='/All-Cocktails' className='nav-link float-right'>All Cocktails</Link></li>
					      <li className='nav-item'><Link to='/Guest-Book' className='nav-link float-right'>Guest Book</Link></li>
					      <li className='nav-item'><Link to='/Quizz' className='nav-link float-right'>Quizz</Link></li>
			      </ul>
              </div>
		        </nav>

        <Switch>
		      <Route exact path='/'><Home /></Route>
		      <Route path='/Find-your-cocktail' component={FindYourCocktail} />
		      <Route path='/All-Cocktails' component={AllCocktails} />
		      <Route path='/Guest-Book' component={GuestBook} />
		      <Route path='/Quizz' component={Quizz} />
        </Switch>
      </div>
    </Router>
  );
}

function Home () {
  return <h2>Home</h2>;
}

export default Navbar;

