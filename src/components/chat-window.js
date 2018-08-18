import React, {Component} from 'react';
import ChatInput from './chatInput';
import MessageWindow from './messageWindow';
import handleIntents from '../utils/handleIntents';
import patBotImg from '../img/headshot_wpap_ico.png';

class ChatWindow extends Component{
  constructor(props){
    super(props);
    this.state = {
      dialog: [
        {user: 'PatBot', text: "Hi there!", icon: patBotImg, timestamp: Date.now()}
      ]
    }
  }

  scrollToBottom(){
    const msgWindow = document.querySelector('.message-window');
    msgWindow.scrollTop = msgWindow.scrollHeight;
  }

  handleInput = incResponse => {
    this.setState({dialog: [...this.state.dialog, incResponse]});
    this.getIntent(incResponse.text);
    this.scrollToBottom();
  }

  getIntent = chatTxt => {
    const cleanText = chatTxt.replace(/[^\w ]/g, '');
    fetch(`https://api.wit.ai/message?v=20180803&q=${cleanText}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer HV73VC3COSNUIWBTUUMYD2ZOEXMOKPJ4`,
          'Content-Type': 'application/json',
        }
    }).then(resp => resp.json())
      .then(data => {
        const responses = handleIntents(data);
        responses.map( response =>{
          this.setState({dialog: [...this.state.dialog, response]});
          this.scrollToBottom();
        });
      })
  }

  render(){
    return(
      <div className="chat-window container-fluid">
        <div className="row title-block">
          <span className=''>Bot 3000</span>
        </div>
        <MessageWindow dialog={this.state.dialog}/>
        <ChatInput handleInput={this.handleInput}/>
      </div>
    )
    }
  }

export default ChatWindow;