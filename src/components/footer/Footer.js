import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render () {
        return(     
            <footer className='bloc_page'>
                <div className='com'>
                <img src="https://pngimage.net/wp-content/uploads/2018/06/logo-cocktail-png-6.png" alt="logo" title="logo"></img>
                    <h3>GuestBook</h3>
                    <p>The last comment :</p>
                    <p>"This cocktail was Great"</p>
                    <p>14 april 2020</p> {/*ajouter l'aplication date  */}
                </div>
                <div className='contact'>
                    <h3>Contact</h3>
                    <a href="mailto:cocktail.finder@outlook.fr">contacts us</a>
                    <img src="https://miro.medium.com/max/621/1*XyvBPSfQebxwD652YQOtqw.png" alt="Nos réseaux sociaux" title="Nos réseaux sociaux"></img>
                </div>
                <div className='copiright'>
                    <p>copyright by lens78inc2020</p>
                    <p>Application Cocktail Finder</p>
                    <p className='phrases'>"Excessive drinking is </p>
                    <p className='phrases'>dangerous for the health"</p>
                    <p><strong>Our conditions...</strong></p>
                </div>
            </footer>  
        );
    }
}

export default Footer;
