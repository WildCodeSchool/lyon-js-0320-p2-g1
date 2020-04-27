import React from 'react';
import Image from '../../images/cocktail.png';
import './Home.css';
const CompoCocktail = (props) => {
  return (
    <div className='row'>
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
            <button className='btn btn-lg'>Chose my ingredients</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompoCocktail;
