import React, { Component,} from 'react'

class Formulaire extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment : '',
    }
  }

  handleChange = e =>{
    const comment = e.target.value;
    this.setState({
      comment : comment,
    })
  }

 handleSubmit= e =>{
  e.preventDefault();
  this.createComment();
}

createComment = ()=>{
  const { addComment } = this.props;
  const comment = {
    comment : this.state.comment,
  }

addComment(comment);
// reset input value
this.setState({ comment : ''})
}


  render () {

    return (
      <form onSubmit = {this.handleSubmit} >
        <div className="form-group">
          <textarea placeholder = 'Your comment...'
            onChange = {this.handleChange} 
            value = {this.state.comment} />
        </div>
        <div className="panel-footer">
          <button className="btn btn-lg">Send</button>
        </div>
     </form>
    )
  }
}

export default Formulaire