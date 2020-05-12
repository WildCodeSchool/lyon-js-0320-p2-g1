import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FindYourCocktail from '../find-your-cocktail/FindYourCocktail';
import AllCocktails from '../all-cocktails/AllCocktails';
import GuestBook from '../guestbook/GuestBook';
import Quizz from '../quizz/Quizz';
<<<<<<< HEAD
import Home from '../home/Home.js';
=======
import Home from '../home/Home';
>>>>>>> 1d6443404af2eab28e7ac784d84961dade24106b
import 'bootswatch/dist/lux/bootstrap.min.css';
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
