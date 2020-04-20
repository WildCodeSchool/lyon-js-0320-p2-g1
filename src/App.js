import React from 'react';
import Navbar from './components/navbar/Navbar.js';
import Main from './components/main/Main.js';
import 'bootswatch/dist/lux/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
