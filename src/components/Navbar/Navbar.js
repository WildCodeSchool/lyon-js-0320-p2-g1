import React from 'react';
import './components/Navbar/Navbar.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './src/images/logo.jpg';

function Navbar () {
  return (
    <Router>
      <div>
			  <div>
				  <img src= './src/images/logo.jpg' className='logo' alt='logo'/>
				  <h1>Cocktail Finder</h1>
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
const rootElement = document.getElementById('root');
ReactDOM.render(<Navbar />, rootElement);

{ /* // Si on utilise : <Route path="/.../:githubLogin" component={} /> afin de récupérer dans l'URL

// dans la page du composant correspondant (ex) :
// import React from 'react';

// function UsersList(props) {
//   Get the URL parameters
//   const params = props.match.params;
//   return (
//     <div>
//       <p>
//         Pseudo: <em>{params.githubLogin}</em>
//       </p>
//     </div>
//   );
// }

// export default UsersList; */ }
