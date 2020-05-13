import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

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
            <Link exact to='/quizz'><button className='btn btn-lg'>Quizz</button></Link>
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
            <Link exact to='/all-cocktails'><button className='btn btn-lg'>All cocktails</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizz;
