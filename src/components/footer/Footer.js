import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render () {
        return(     
            <footer className='bloc_page'>
                <div className='com'>
                    <h1>GuestBook</h1>
                    <p>The last comment :</p>
                    <p>"This cocktail was Great"</p>
                    <p>14 april 2020</p> {/*ajouter l'aplication date  */}
                </div>
                <div className='contact'>
                    <h1>Contact</h1>
                    <button>Contact us</button>
                    <img src="https://miro.medium.com/max/621/1*XyvBPSfQebxwD652YQOtqw.png" alt="Nos réseaux sociaux" title="Nos réseaux sociaux"></img>
                </div>
                <div className='copiright'>
                    <p>copyright by lens78inc2020</p>
                    <p>Application Cocktail Finder</p>
                    <p>"Excessive drinking is </p>
                    <p>dangerous for the health"</p>
                    <p><strong>Our conditions...</strong></p>
                </div>
            </footer>  
        );
    }
}

export default Footer;