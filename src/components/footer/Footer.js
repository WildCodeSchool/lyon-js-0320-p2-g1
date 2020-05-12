import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render () {
    return (
      <footer className='bloc_page'>
        <div className='contact'>
          <p>Contact us by sending an <a href='mailto:cocktail.finder@outlook.fr'>email</a></p>
        </div>
        <div className='warning-container'>
          <p className='warning'>Excessive drinking is dangerous for the health</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
