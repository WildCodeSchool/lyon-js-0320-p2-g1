import React from 'react';
import Home from './components/Home/Home.js';
import Navbar from './components/Navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
