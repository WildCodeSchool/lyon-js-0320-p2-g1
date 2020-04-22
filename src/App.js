import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/footer/Footer';
import 'bootswatch/dist/lux/bootstrap.min.css';
import Home from './components/Home/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Footer />
      <Home />
    </div>
  );
}

export default App;
