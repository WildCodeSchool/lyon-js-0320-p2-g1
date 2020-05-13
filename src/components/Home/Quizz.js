import React from 'react';
import './Home.css';

const Quizz = (props) => {
  return (
    <div className='row'>
      <div className='col-lg-6 col-md-12 '>
        <div className='panel panel-default text-center'>
          <div className='panel-heading'>
            <h4>{props.firstPanelh4} </h4>
          </div>
          <div className='panel-body'>
            <p>{props.firstPanelParagraphe}</p>
          </div>
          <div className='panel-footer'>
            <button className='btn btn-lg'>Quizz</button>
          </div>
        </div>
      </div>
      <div className='col-lg-6  col-md-12 '>
        <div className='panel panel-default text-center'>
          <div className='panel-heading'>
            <h4> {props.secondPanelh4}</h4>
          </div>
          <div className='panel-body'>
            <p> {props.seconPanelParagraphe}</p>
          </div>
          <div className='panel-footer'>
            <button className='btn btn-lg'>All cocktails</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizz;
