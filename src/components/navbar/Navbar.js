import React from 'react';
import './Navbar.css';
import FindYourCocktail from '../find-your-cocktail/FindYourCocktail';
import AllCocktails from '../all-cocktails/AllCocktails';
import GuestBook from '../guestbook/GuestBook';
import Quizz from '../quizz/Quizz';
import Logo from '../../images/logo.jpg';
import Home from '../home/Home.js';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Navbar () {
  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark'>
          <a id='navbar-brand' href='./components/Home/Home.js'><img src={Logo} id='logo' alt='logo' /> </a>
          <h1 className='navbar-brand'>Cocktail Finder</h1>
          {/* C'est le bouton burger (navbar-toggler) */}
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarColor01' aria-controls='navbarColor01' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse justify-content-end' id='navbarColor01'>
            <ul className='navbar-nav text-right'>
              <li className='nav-item active'><Link to='/' className='nav-link'>Home</Link></li>
              <li className='nav-item'><Link to='/find-your-cocktail' className='nav-link'>Find your cocktail</Link></li>
              <li className='nav-item'><Link to='/All-Cocktails' className='nav-link'>All Cocktails</Link></li>
              <li className='nav-item'><Link to='/Guest-Book' className='nav-link'>Guest Book</Link></li>
              <li className='nav-item'><Link to='/Quizz' className='nav-link'>Quizz</Link></li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/find-your-cocktail' component={FindYourCocktail} />
          <Route path='/All-Cocktails' component={AllCocktails} />
          <Route path='/Guest-Book' component={GuestBook} />
          <Route path='/Quizz' component={Quizz} />
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;
