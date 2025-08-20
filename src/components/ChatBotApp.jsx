import React from "react";
import "./ChatBotApp.css";

const ChatBotApp = ({ onEndChat, chat, setChat }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [messages, setMessages] = React.useState(chat[0]?.messages || []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = (e) => {
    if (inputValue.trim() === "") return;

    const newMessage = {
      type: "prompt",
      text: inputValue,
      timestamp: new Date().toLocaleTimeString(),
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInputValue("");

    const updatedChat = chat.map((c, index) => {
      if (index === 0) {
        return { ...c, messages: updatedMessages };
      }
      return c;
    });
    setChat(updatedChat);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
        }       
    };  

  return (
    <div className="chat-app">
      <div className="chat-list">
        <div className="chat-list-header">
          <h2>Chat List</h2>
          <i className="bx bx-edit-alt new-chat"></i>
        </div>
        {chat.map((c, index) => (
          <div
            key={index}
            className={`chat-list-item ${index === 0 ? "active" : ""}`}
          >
            <h4>{c.id}</h4>
            <i className="bx bx-x-circle"></i>
          </div>
        ))}
      </div>
      <div className="chat-window">
        <div className="chat-title">
          <h3>T@stBot</h3>
          <i className="bx bx-chevron-left arrow" onClick={onEndChat}></i>
        </div>
        <div className="chat">
          {messages.map((message, index) => (
            <div
              key={index}
              className={message.type === "prompt" ? "prompt" : "response"}
            >
              {message.text}
              <span>{message.timestamp}</span>
            </div>
          ))}
          <div className="typing">Typing...</div>
        </div>
        <form
          className="msg-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <i className="fa-solid fa-face-smile emoji"></i>
          <input
            type="text"
            className="msg-input"
            placeholder="Type your message here..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <i className="fa-solid fa-paper-plane" onClick={sendMessage}></i>
        </form>
      </div>
    </div>
  );
};

export default ChatBotApp;
