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
            <div className='collapse navbar-collapse justify-content-end' id='navbarColor01'>
				      <ul className='navbar-nav text-right'>
					      <li className='nav-item active'><Link to='/Home.js' className='nav-link'>Home</Link></li>
					      <li className='nav-item'><Link to='/Find-your-cocktail' className='nav-link'>Find your cocktail</Link></li>
					      <li className='nav-item'><Link to='/All-Cocktails' className='nav-link'>All Cocktails</Link></li>
					      <li className='nav-item'><Link to='/Guest-Book' className='nav-link'>Guest Book</Link></li>
					      <li className='nav-item'><Link to='/Quizz' className='nav-link'>Quizz</Link></li>
			      </ul>
              </div>
		        </nav>

        <Switch>
		      <Route exact path='/Home.js'><Home /></Route>
		      <Route exact path='/Find-your-cocktail' component={FindYourCocktail} />
		      <Route exact path='/All-Cocktails' component={AllCocktails} />
		      <Route exact path='/Guest-Book' component={GuestBook} />
		      <Route exact path='/Quizz' component={Quizz} />
        </Switch>
      </div>
    </Router>
  );
}

function Home () {
  return <h2>Home</h2>;
}

export default Navbar;

