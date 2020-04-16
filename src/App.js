import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import 'bootswatch/dist/lux/bootstrap.min.css';
import FindYourCocktail from './components/find-your-cocktail/FindYourCocktail';
import 'bootstrap/dist/css/bootstrap.min.css';


function App () {
  return (
    <div className='App'>
      <Navbar />
      <FindYourCocktail />
    </div>
  );
}

export default App;
