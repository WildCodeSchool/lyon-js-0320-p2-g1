import React from 'react';
import './GuestBook.css';

function GuestBook () {
  return (
    <main className='mainGuestbook'>
      <div className='pageDescription'>
        <h1>Guestbook</h1>
        <p>If you need any informations or if you have some suggestions, feel free to leave a comment !</p>
      </div>
      <form className='GuestbookForm'>
        <label for='commentArea'>Your comments</label>
        <textarea id='message' name='user_message' placeholder='Type your message here' />
        <input type='submit' value='Send' />
      </form>
      <div className='commentList'>
        <h2>Last comments</h2>
        <div className='comments'>
          <h3>Message from [User Name]:</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam neque, accumsan in sapien eget, scelerisque congue nulla. Vestibulum diam diam, lacinia a magna ut, dapibus hendrerit augue.</p>
        </div>
        <div className='comments'>
          <h3>Message from [User Name]:</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam neque, accumsan in sapien eget, scelerisque congue nulla. Vestibulum diam diam, lacinia a magna ut, dapibus hendrerit augue.</p>
        </div>
        <div className='comments'>
          <h3>Message from [User Name]:</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam neque, accumsan in sapien eget, scelerisque congue nulla. Vestibulum diam diam, lacinia a magna ut, dapibus hendrerit augue.</p>
        </div>
      </div>
    </main>
  );
}

export default GuestBook;
