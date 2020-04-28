import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import './GuestBook.css';
import './Animation.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class GuestBook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: {},
      name: '',
      comment: '',
      date: new Date(),
      loading: false
    }
  }

  componentDidMount() {
    const comments = localStorage.getItem('comments')
    this.setState({ comments: (JSON.parse(comments)) });
    this.getDate();
  }

  componentDidUpdate() {
    localStorage.setItem('comments', JSON.stringify(this.state.comments));
  }

  handleChangeComment = e => {
    const comment = e.target.value;
    this.setState({ comment })
  }

  handleChangeName = e => {
    const name = e.target.value;
    this.setState({ name })
  }

  handleClick = () => {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 800);

    this.setState({ loading: true })
  }

  handleSubmit = e => {
    e.preventDefault();
    setTimeout(() => {
      this.addComment();
    }, 800);
  }

  getDate = () => {
    const date = new Date();
    this.setState({
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    });
  }

  addComment = () => {
    const { name, comment, date } = this.state;
    const nameComment = { name, comment, date };
    const newComments = { ...this.state.comments };
    newComments[`kayComment-${Date.now()}`] = nameComment;
    this.setState({ comments: newComments });
    // reset input value
    this.setState({ comment: '', name: '' })
  }

  render() {
    const donload =
      <div className='loading' >
        <ReactLoading type='spin' color='rgb(214, 214, 214)' height={'5%'} width={'5%'} />
      </div>

    const comments = Object.keys(this.state.comments).reverse().slice(0, 3).map(key => (
      <CSSTransition classNames='fade' timeout={800} key={key}>
        <div className='comments'>
          <p>{this.state.comments[key].comment}</p>
          <div className='date'>
            <p> Name : {this.state.comments[key].name}</p>
            <p>Posted : {this.state.comments[key].date}</p>
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
              <input type="text" placeholder="Username" aria-label="Username"
                onChange={this.handleChangeName} value={this.state.name} required />
              <textarea rows='2' placeholder='Your comment' onChange={this.handleChangeComment} value={this.state.comment} required />
            </div>
            <div className="panel-footer">
              <button className="btn btn-lg" onClick={this.handleClick}>Add comment</button>
            </div>
            {this.state.loading ? donload : null}
          </form>
          <h5 className='titleH5'>Last comments</h5>
          <TransitionGroup >{comments}</TransitionGroup>
        </div>
      </main>
    )
  }
}


export default GuestBook
