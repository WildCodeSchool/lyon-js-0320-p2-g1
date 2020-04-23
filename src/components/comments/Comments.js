import React, { Component } from 'react';
import './comments.css';
import ReactLoading from 'react-loading';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: {},
      comment: "",
      loading: false,
    }
  }

  componentDidMount() {
    const comments = localStorage.getItem('comments')
     this.setState(JSON.parse(comments));
     console.log(comments);
  }

  handleChange = e => {
    const comment = e.target.value;
    this.setState({
      comment: comment,
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    setTimeout(() => {
      this.addComment();
    }, 1000);
  }

  handleClick = () => {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000);

    this.setState({ loading: true })

  }

  addComment = () => {
    const comment ={
      comment : this.state.comment,
    } 
    
    const newComments = { ...this.state.comments };
    newComments[`kayComment-${Date.now()}`] = comment;
    this.setState({ comments : newComments })

    localStorage.setItem('comments', JSON.stringify(this.state.comments));
    // reset input value
    this.setState({ comment: '' }) 
  }


  calendar = () => {
    const date = new Date();
    return (
      (`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`)
    );
  }


  render() {
    const comments = Object.keys(this.state.comments).reverse().slice(0, 4).map(key => (

      <CSSTransition className='comments' timeout={1000} key={key}>
        <p>
          {this.state.comments[key].comment}
          <span className='calendar'>Envoyé le: {this.calendar()}</span>
        </p>
      </CSSTransition>
    ));

    const donload = <div className='loading'>
      <ReactLoading height={'60%'} width={'6%'} color={'#ad212a'} />
    </div>;

    return (
      <div className='panel'>
        <h5 className='titleH5'>Your comments</h5>
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <textarea placeholder='Your comment...' rows = '1'
              onChange={this.handleChange}
              value={this.state.comment}
            />
          </div>
          <div className="panel-footer">
            <button className="btn btn-lg" onClick={this.handleClick}>Send</button>
          </div>
          {this.state.loading ? donload : ''}
        </form>
        <h5 className='titleH5'>Last comments</h5>
        <TransitionGroup className='comment' >{comments}</TransitionGroup>

      </div>
    )
  }
}


export default Comments