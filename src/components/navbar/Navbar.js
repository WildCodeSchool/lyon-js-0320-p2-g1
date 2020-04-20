import React from 'react';
import './Navbar.css';
import Logo from '../../images/logo.jpg';
import { NavLink } from 'react-router-dom';

export default function NavBar () {
  return (
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
            <li className='nav-item active'>
              <NavLink exact to='/' className='nav-link'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact to='/find-your-cocktail' className='nav-link'>Find your cocktail</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact to='/all-cocktails' className='nav-link'>All Cocktails</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact to='/guestbook' className='nav-link'>Guest Book</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact to='/quizz' className='nav-link'>Quizz</NavLink>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  );
}

