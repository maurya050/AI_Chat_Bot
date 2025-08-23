import React, { useEffect } from "react";
import "./ChatBotApp.css";

const ChatBotApp = ({
  onEndChat,
  chats,
  setChats,
  activeChat,
  setActiveChat,
  onNewChat,
}) => {
  const [inputValue, setInputValue] = React.useState("");
  const [messages, setMessages] = React.useState(chats[0]?.messages || []);

  useEffect(() => {
    const activeChatObj = chats.find((c) => c.id === activeChat);
    if (activeChatObj) {
      setMessages(activeChat ? activeChatObj.messages : []);
    }
  }, [chats, activeChat]);

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

    const updatedChat = chats.map((c) => {
      if (c.id === activeChat) {
        return { ...c, messages: updatedMessages };
      }
      return c;
    });
    setChats(updatedChat);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSelectChat = (id) => {
    setActiveChat(id);
  };

  const handleDeleteChat = (id) => {
    const updatedChats = chats.filter((c) => c.id !== id);
    setChats(updatedChats);
    if (id === activeChat && updatedChats.length > 0) {
      setActiveChat(updatedChats[0].id);
    } else if (updatedChats.length === 0) {
      setActiveChat(null);
    }
  };

  return (
    <div className="chat-app">
      <div className="chat-list">
        <div className="chat-list-header">
          <h2>Chat List</h2>
          <i className="bx bx-edit-alt new-chat" onClick={onNewChat}></i>
        </div>
        {chats.map((c) => (
          <div
            key={c.id}
            className={`chat-list-item ${c.id === activeChat ? "active" : ""}`}
            onClick={() => handleSelectChat(c.id)}
          >
            <h4>{c.displayId}</h4>
            <i
              className="bx bx-x-circle"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteChat(c.id);
              }}
            ></i>
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
