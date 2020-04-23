import React from 'react';
import Home from './components/home/Home'
import { BrowserRouter , Switch, Route, Link} from "react-router-dom";
import Comments from './components/comments/Comments'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <li><Link to = '/'>Home</Link></li>
        <li><Link to = '/Comments'> Comments </Link></li>
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/Comments' component = {Comments}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
