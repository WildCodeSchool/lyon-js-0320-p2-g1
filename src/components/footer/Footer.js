import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render () {
    return (
      <footer className='bloc_page d-flex justify-content-center align-items-center flex-column-reverse flex-md-row'>
        <div className='contact col-12 col-md-6 text-center'>
          <p className='contactText'>Contact us by sending an <a className='lienFooter' href='mailto:cocktail.finder@outlook.fr'>email</a></p>
        </div>
        <div className='warning-container col-12 col-md-6 text-center'>
          <p className='warning'>Excessive drinking is dangerous for the health</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
