import React from 'react'

const ChatBotApp = () => {
  return (
    <div className='chat-app'>
        <div className='chat-list'>
            <div className='chat-list-header'>
                <h2>Chat List</h2>
                <i className='bx bx-edit-alt new-chat'></i>
            </div>
            <div className="chat-list-item">
                <h4>Chat 20/07/2024 12:23:53 PM</h4>
                <i className="bx bx-x circle"></i>
            </div>
            <div className="chat-list-item">
                <h4>Chat 20/07/2024 12:23:53 PM</h4>
                <i className="bx bx-x circle"></i>
            </div> <div className="chat-list-item">
                <h4>Chat 20/07/2024 12:23:53 PM</h4>
                <i className="bx bx-x circle"></i>
            </div>

        </div>
        <div className="chat-window">
            <div className="chat-title">
                <h3>Chat with AI</h3>
                <i className="bx-bx-arrow-back arrow"></i>
            </div>
            <div className="chat">
                <div className="prompt">Hi, How are you?
                    <span>12:32:42 PM</span>
                </div>
                <div className="response">Hi, I'm just a computer program i don't have feeling. 
                    <span>12:32:42 PM</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ChatBotApp
