import React from 'react';
import './Components/Navbar/Navbar.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Navbar () {
  return (
  	<Router>
  		<div>
  			<div>
  				<img src='' className='' alt='' >
  				<h1>Find your Cocktail</h1>
  			</div>
  			
    		<nav className='Navbar'>
  				<ul className='NavLinkContainer'>
  					<li className='NavLink'><Link to="/">Home</Link></li>
  					<li className='NavLink'><Link to="/">Cocktail Finder</Link></li>
  					<li className='NavLink'><Link to="/">All Cocktails</Link></li>
  					<li className='NavLink'><Link to="/">Guest Book</Link></li>
  					<li className='NavLink'><Link to="/">Quizz</Link></li>
      			</ul>
    		</nav>

    		<Switch>
          		<Route exact path="/"><Home /></Route>
          		<Route path="/" component={} />
          		<Route path="/" component={} />
          		<Route path="/" component={} />
          		<Route path="/.../:..." component={} />
          	</Switch>
        </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default Navbar;
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

{/* // Si on utilise : <Route path="/.../:githubLogin" component={} /> afin de récupérer dans l'URL

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

// export default UsersList; */}