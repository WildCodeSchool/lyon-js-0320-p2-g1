import React from 'react';
import Navbar from './components/navbar/Navbar.js';
import Main from './components/main/Main.js';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function App () {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
