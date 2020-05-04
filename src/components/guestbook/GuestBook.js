import React, { Component } from 'react';
import './GuestBook.css';
import './Animation.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class GuestBook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      name: '',
      comment: '',
      dateobj : new Date(),
    }
  }

  componentDidMount() {
    const comments = localStorage.getItem('comments')
    if (comments) 
      this.setState({ comments: JSON.parse(comments) });
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    setTimeout(() => {
      this.addComment();
    }, 200);
  }

  addComment = () => {
    const { name, comment, dateobj } = this.state;
    const pad = n =>  n < 10 ? "0"+n : n;
    const date = `${pad(dateobj.getDate())}/${pad(dateobj.getMonth()+1)}/${dateobj.getFullYear()}`;
    const newComment = { name, comment, date };
    const newComments = [...this.state.comments, newComment];

    this.setState({ comments: newComments }, () => {
      localStorage.setItem('comments', JSON.stringify(this.state.comments));
    });
    // reset input value
    this.setState({ comment: '', name: ''  })
  }

  render() {

    const comments = this.state.comments.reverse().slice(0, 2).map(comment => (
      <CSSTransition classNames='fade' timeout={600} key={comment.name}>
        <div className='comments'>
          <p>{comment.comment}</p>
          <div className='date'>
            <p> Name : {comment.name}</p>
            <p>Posted : {comment.date}</p>
          </div>
        </div>
      </CSSTransition>
    ));
    return (
      <main className='mainGuestbook'>
        <div className='allElementsContainer'>
          <div className='pageDescription'>
            <h1>Guestbook</h1>
            <h6>If you need any informations or if you have some suggestions, feel free to leave a comment !</h6>
          </div>
          <h5 className='titleH5'>Your comments</h5>
          <form onSubmit={this.handleSubmit} >
            <div className="form-group">
              <input id = 'name' type="text" placeholder="Username" aria-label="Username"
                onChange={this.handleChange} value={this.state.name} required />
              <textarea id = 'comment' rows='2' placeholder='Your comment' onChange={this.handleChange} value={this.state.comment} required />
            </div>
            <div className="panel-footer">
              <button className="btn btn-lg" onClick={this.handleClick}>Add comment</button>
            </div>
          </form>
          <h5 className='titleH5'>Last comments</h5>
          <TransitionGroup >{comments}</TransitionGroup>
        </div>
      </main>
    )
  }
}


export default GuestBook
