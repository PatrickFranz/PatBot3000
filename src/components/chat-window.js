import React, {Component} from 'react';
import ChatInput from './chatInput';
import MessageWindow from './messageWindow';

class ChatWindow extends Component{
  constructor(props){
    super(props);
    this.state = {
      dialog: [
        {user: 'PatBot', text: "Hi there!", timestamp: Date.now()}
      ]
    }
  }

  handleInput = incResponse => {
    this.setState({dialog: [...this.state.dialog, incResponse]});
  }

  render(){
    return(
      <div className="chat-window container-fluid">
        <div className="row title-block">
          <span className=''>PatBot 3000</span>
        </div>
        <MessageWindow dialog={this.state.dialog}/>
        <ChatInput handleInput={this.handleInput}/>
      </div>
    )
    }
  }

export default ChatWindow;