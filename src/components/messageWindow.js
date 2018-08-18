import React, {Component} from 'react';
import ChatBubble from './chatBubble';

class MessageWindow extends Component{
  render(){
    return(
      <div className="message-window">
        {this.props.dialog.map( bbl => (
          <ChatBubble key={bbl.timestamp} data={bbl}/>
        ))}
      </div>

      )
  }
}

export default MessageWindow;