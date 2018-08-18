import React, {Component} from 'react';
import defaultImgIcon from '../img/anon_profile.png'
class ChatBubble extends Component{

  render(){
    return(
      <div className="chat-bubble">
        <span className="icon">
          <img src={this.props.data.icon || defaultImgIcon} alt="User Icon" className='icon-img'/>
        </span>
        <span className="msg">{this.props.data.text}</span>
      </div>
    )
  }
}

export default ChatBubble;