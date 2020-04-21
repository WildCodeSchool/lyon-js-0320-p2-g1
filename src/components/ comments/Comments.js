import React, { Component, div} from 'react'
import Formulaire from './Formulaire'
import './comments.css'

class Comments extends Component {

  constructor(props){
    super(props);
    this.state = {
      comments : {}
    }
  }

  addComment = comment => {
    const comments = { ...this.state.comments };
    comments[`comment-${Date.now()}`] = comment;
    this.setState({ comments })
  }

  render () {
    const comments = Object.keys(this.state.comments).map(key =>(
      <p className='comment' key = {key}>{this.state.comments[key].comment}</p>
    ))
    

    return (
      <div className = 'panel  '>
        <h4 className = 'titleH4'>Your comments</h4>
        <Formulaire addComment = {this.addComment} />
        <div >
          <h4 className = 'titleH4'>Last comments</h4>
          {comments}
          <p className='comment' > comment 1</p>
          <p className='comment' > comment 2</p>
          <p className='comment' > comment 3</p>
          <p className='comment' > comment 4</p>
          <p className='comment' > comment 5</p>
        </div>
      </div>
    )
  }
}


export default Comments