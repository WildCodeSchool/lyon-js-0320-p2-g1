
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootswatch/dist/lux/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App () {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
