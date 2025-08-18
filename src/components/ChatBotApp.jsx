import React from 'react'
import './ChatBotApp.css'

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
                <div className="response">Hi, I'm just a computer program i don't have feeling but I'm here to help you!
                    <span>12:32:42 PM</span>
                </div> 
                <div className="typing">Typing...</div>
            </div>
            <form className='msg-form'>
                <i className="fa-solid fa-face smile emoji"></i>
                <input type="text" className='msg-input' placeholder='Type your message here...' />
                <i className="fa-solid fa-paper-plane"></i>
                {/* <button type='submit'><i className='bx bx-send'></i></button> */}
            </form>
        </div>
    </div>
  )
}

export default ChatBotApp
