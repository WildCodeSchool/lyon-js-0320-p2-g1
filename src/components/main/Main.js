import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FindYourCocktail from '../find-your-cocktail/FindYourCocktail';
import AllCocktails from '../all-cocktails/AllCocktails';
import GuestBook from '../guestbook/GuestBook';
import Quizz from '../quizz/Quizz';
import Home from '../Home/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main () {
  return (
    <main>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/find-your-cocktail'><FindYourCocktail /></Route>
        <Route exact path='/all-cocktails'><AllCocktails /></Route>
        <Route exact path='/guestbook'><GuestBook /></Route>
        <Route exact path='/quizz'><Quizz /></Route>
      </Switch>
    </main>
  );
}

export default Main;
