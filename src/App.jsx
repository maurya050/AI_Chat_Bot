import React from "react";
import ChatBotStart from "./components/ChatBotStart";
import ChatBotApp from "./components/ChatBotApp";

const App = () => {
  const [isChatting, setIsChatting] = React.useState(false);
  const [chat, setChat] = React.useState([]);

  const handleStartChat = () => {
    setIsChatting(true);

    if (chat.length === 0) {
      const newChat = {
        id: `Chat ${new Date().toLocaleDateString(
          "en-GB"
        )} ${new Date().toLocaleTimeString()}`,
        messages: [],
      };
      setChat([newChat]);
    }
  };
  const handleEndChat = () => {
    setIsChatting(false);
  };

  return (
    <div className="container">
      {isChatting ? (
        <ChatBotApp onEndChat={handleEndChat} chat={chat} setChat={setChat} />
      ) : (
        <ChatBotStart onStartChat={handleStartChat} />
      )}
    </div>
  );
};

export default App;
