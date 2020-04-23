import React from 'react';
import GuestBoock from './components/guestbook/GuestBook';
import Comments from './components/comments/Comments'
import './components/guestbook/GuestBook.css'



function App () {
  return (
    <div className='App'>
      <GuestBoock />
      <Comments />
    </div>
  );
}

export default App;

