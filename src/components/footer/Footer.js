import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render () {
        return(     
            
<footer className='bloc_page'>
    <div className='boissons'>
                    <h1> commentaire</h1>
                    <p>tes derniers commentaires</p>
                    <p>cette boisson est top</p>
                    <p>le 14 avril2020</p>
    </div>
    <div className='contact'>
                    <h1>contact</h1>
                    <p className='bouton_rouge'>nous contacter</p>
                    <img className="reseau-sociau" src="https://miro.medium.com/max/621/1*XyvBPSfQebxwD652YQOtqw.png" alt="Nos réseaux sociaux" title="Nos réseaux sociaux"></img>
                    <p></p>
    </div>
	<div className='copiright'>
                    <p>copiright by lens78inc2020</p>
                    <p>aplicationfind the drink</p>
                    <p>la consomation d'alcool</p>
                    <p>est a modérer</p>
                    <ul>
                        <li><a href="#"><strong>Nos Conditions <span class="color-point">...</span></strong></a></li>
                    </ul>
                    
    </div>
    
</footer>

            

            
            
        );
        
    }
}

export default Footer;