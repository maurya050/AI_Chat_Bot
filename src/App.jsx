import React, { useEffect } from "react";
import ChatBotStart from "./components/ChatBotStart";
import ChatBotApp from "./components/ChatBotApp";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [isChatting, setIsChatting] = React.useState(false);
  const [chats, setChats] = React.useState([]);
  const [activeChat, setActiveChat] = React.useState(null);

  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem("chats")) || [];
    setChats(storedChats);
    if (storedChats.length > 0) {
      setActiveChat(storedChats[0].id);
    }
  }, []);

  
  const handleStartChat = () => {
    setIsChatting(true);

    if (chats.length === 0) {
      createNewChat();
    }
  };
  const handleEndChat = () => {
    setIsChatting(false);
  };

  const createNewChat = (initialMessage = "") => {
    const newChat = {
      id: uuidv4(),
      displayId: `Chat ${new Date().toLocaleDateString(
        "en-GB"
      )} ${new Date().toLocaleTimeString()}`,
      messages: initialMessage
        ? [
            {
              type: "prompt",
              text: initialMessage,
              timestamp: new Date().toLocaleDateString(),
            },
          ]
        : [],
    };
    const updatedChat = [newChat, ...chats];
    setChats(updatedChat);
    localStorage.setItem("chats", JSON.stringify(updatedChat));
    localStorage.setItem(newChat.id, JSON.stringify(newChat.messages));
    setActiveChat(newChat.id);
  };

  return (
    <div className="container">
      {isChatting ? (
        <ChatBotApp
          onEndChat={handleEndChat}
          chats={chats}
          setChats={setChats}
          activeChat={activeChat}
          setActiveChat={setActiveChat}
          onNewChat={createNewChat}
        />
      ) : (
        <ChatBotStart onStartChat={handleStartChat} />
      )}
    </div>
  );
};

export default App;
