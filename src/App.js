import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/footer/Footer';
import 'bootswatch/dist/lux/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  return (
    <div className="App">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
