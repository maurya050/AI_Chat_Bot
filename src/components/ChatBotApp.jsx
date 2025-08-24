import React, { useEffect } from "react";
import "./ChatBotApp.css";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

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
  const [isTyping, setIsTyping] = React.useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = React.useState(false);
  const chatEndRef = React.useRef(null);

  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  useEffect(() => {
    const activeChatObj = chats.find((c) => c.id === activeChat);
    if (activeChatObj) {
      setMessages(activeChat ? activeChatObj.messages : []);
    }
  }, [chats, activeChat]);

  const handleEmojiSelect = (emoji) => {
    setInputValue((prev) => prev + emoji.native);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = async () => {
    try {
      if (inputValue.trim() === "") return;

      const newMessage = {
        type: "prompt",
        text: inputValue,
        timestamp: new Date().toLocaleTimeString(),
      };

      if (!activeChat) {
        onNewChat(inputValue);
        setInputValue("");
        return;
      }

      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setInputValue("");

      const updatedChat = chats.map((c) =>
        c.id === activeChat ? { ...c, messages: updatedMessages } : c
      );
      setChats(updatedChat);
      setIsTyping(true);

      try {
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: "gpt-4o-mini-2024-07-18",
              messages: [{ role: "user", content: inputValue }],
              max_tokens: 500,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`API call failed: ${response.status}`);
        }

        const data = await response.json();

        if (!data.choices || !data.choices[0]) {
          throw new Error("Invalid response from OpenAI");
        }

        const chatResponse = data.choices[0].message.content.trim();
        const responseMessage = {
          type: "response",
          text: chatResponse,
          timestamp: new Date().toLocaleTimeString(),
        };

        const finalMessagesWithResponse = [...updatedMessages, responseMessage];
        setMessages(finalMessagesWithResponse);
        setIsTyping(false);
        const finalUpdatedChat = chats.map((c) =>
          c.id === activeChat
            ? { ...c, messages: finalMessagesWithResponse }
            : c
        );
        setChats(finalUpdatedChat);
      } catch (error) {
        console.error("OpenAI API Error:", error);
        // Add error handling UI here if needed
      }
    } catch (error) {
      console.error("Message sending error:", error);
    }
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

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }

  }, [messages]);

  return (
    <div className="chat-app">
      <div className="chat-list">
        <div className="chat-list-header">
          <h2>Chat List</h2>
          <i
            className="bx bx-edit-alt new-chat"
            onClick={(e) => {
              e.stopPropagation();
              onNewChat("");
            }}
          ></i>
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
          {isTyping && <div className="typing">Typing...</div>}
        <div ref={chatEndRef} />
        </div>
        <form
          className="msg-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <i className="fa-solid fa-face-smile emoji" onClick={() => {
            setShowEmojiPicker(!showEmojiPicker);
          }}></i>
            {showEmojiPicker && (
                <div className="picker">
                <Picker data={data} onEmojiSelect={handleEmojiSelect} />
                </div>
            )}
          <input
            type="text"
            className="msg-input"
            placeholder="Type your message here..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowEmojiPicker(false)}
          />
          <i
            className="fa-solid fa-paper-plane"
            onClick={() => sendMessage()}
          ></i>
        </form>
      </div>
    </div>
  );
};

export default ChatBotApp;
