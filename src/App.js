import React from 'react';
import Home from './components/home/Home.js';
import Navbar from './components/navbar/Navbar.js';
import 'bootswatch/dist/lux/bootstrap.min.css';
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
