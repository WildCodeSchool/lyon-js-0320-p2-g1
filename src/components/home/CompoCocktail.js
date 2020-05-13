import React from 'react';
import Image from '../../images/cocktail.png';
import './Home.css';
import { Link } from 'react-router-dom';

const CompoCocktail = (props) => {
  return (
    <>
      <div className='section2 row'>
        <div className='col-md-12 '>
          <img className='imageIngredient' src={Image} alt='' />
        </div>
        <div className='col-md-12 '>
          <div className='panel panel-default text-center'>
            <div className='panel-heading'>
              <h4> {props.firstPanelh4}</h4>
            </div>
            <div className='panel-body'>
              <p> {props.firstPanelParagraphe}</p>
            </div>
            <div className='panel-footer'>
              <Link exact to='/find-your-cocktail'><button className='btn btn-lg'>Chose my ingredients</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompoCocktail;
