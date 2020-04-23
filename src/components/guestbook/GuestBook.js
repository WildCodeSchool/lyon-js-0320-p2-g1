import React from 'react';
import './GuestBook.css';

function GuestBook () {
  return (
    <main className='mainGuestbook' id='background_opacity'>
      <div className='allElementsContainer'>

        <div className='pageDescription'>
          <h1>Guestbook</h1>
          <p>If you need any informations or if you have some suggestions, feel free to leave a comment !</p>
        </div>

        <div>

          <form className='GuestbookForm'>
            <div className='textareaContainer'>
              <label htmlFor='commentArea' id='label'>Your comment :</label>
              <textarea id='message' className='user_message' placeholder='Type your message here' />
            </div>
            <div className='btnContainer'>
              <input value='Send' type='button' className='btn btn-dark' id='button' />
            </div>
          </form>

          <div className='commentList'>
            <h2>Last comments</h2>

            <div className='comments'>
              <h3>Message from [User Name]:</h3>
              <p className='commentsPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam neque, accumsan in sapien eget, scelerisque congue nulla. Vestibulum diam diam, lacinia a magna ut, dapibus hendrerit augue.</p>
            </div>

            <div className='comments'>
              <h3>Message from [User Name]:</h3>
              <p className='commentsPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam neque, accumsan in sapien eget, scelerisque congue nulla. Vestibulum diam diam, lacinia a magna ut, dapibus hendrerit augue.</p>
            </div>

            <div className='comments'>
              <h3>Message from [User Name]:</h3>
              <p className='commentsPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam neque, accumsan in sapien eget, scelerisque congue nulla. Vestibulum diam diam, lacinia a magna ut, dapibus hendrerit augue.</p>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default GuestBook;