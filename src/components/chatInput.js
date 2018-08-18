import React, {Component} from 'react';

class ChatInput extends Component{

  state = {userQ: ''}
  
  handleChange = e => {
    this.setState({userQ: e.target.value})
  }
  submitQuestion = e => {
    e.preventDefault();
    this.props.handleInput(
      {user: 'Web User',
       text: e.target.firstChild.value,
       timestamp: Date.now()
    });
    this.setState({userQ: ""});
  }

  render(){
    return(
      <div className="chat-input">
        <form onSubmit={this.submitQuestion}>
          <input className='text-in' 
                 type="text" 
                 value={this.state.userQ} 
                 onChange={this.handleChange}/>
          <button type='submit' className="btn btn-primary send">Send</button>
        </form>
      </div>
    )
  }
}

export default ChatInput;