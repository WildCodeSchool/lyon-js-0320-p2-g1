import React from 'react';
import './Navbar.css';
import FindYourCocktail from '../FindYourCocktail/FindYourCocktail';
import AllCocktails from '../AllCocktails/AllCocktails';
import GuestBook from '../GuestBook/GuestBook';
import Quizz from '../Quizz/Quizz';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Navbar () {
  return (
    <Router>
      <div>
        <img src='../images/logo.jpg' className='logo' alt='logo'/> 
			    <div className='websiteTitleContainer'>
				    <h1>Cocktail Finder</h1>
            <img src='../images/subTitleImg.png' className='subTitleImg' alt='subTitleImg'/> 
			    </div>
  			
          <div className='NavbarContainer'>
		        <nav className='Navbar'>
				      <ul className='NavLinkContainer'>
					      <li className='NavLink'><Link to='/'>Home</Link></li>
					      <li className='NavLink'><Link to='/Find-your-cocktail'>Find your cocktail</Link></li>
					      <li className='NavLink'><Link to='/All-Cocktails'>All Cocktails</Link></li>
					      <li className='NavLink'><Link to='/Guest-Book'>Guest Book</Link></li>
					      <li className='NavLink'><Link to='/Quizz'>Quizz</Link></li>
			        </ul>
		        </nav>
          </div>

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

