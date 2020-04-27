import React from 'react';
import './GuestBook.css';
import './Animation.css';
import Comments from './Comments'

function GuestBook() {
  return (
    <main className='mainGuestbook'>
      <div className='allElementsContainer'>
        <div className='pageDescription'>
          <h1>Guestbook</h1>
          <h6>If you need any informations or if you have some suggestions, feel free to leave a comment !</h6>
        </div>
          <Comments />
      </div>
    </main>
  );
}

export default GuestBook;