import React from 'react'
import ChatBotStart from './components/ChatBotStart'
import ChatBotApp from './components/ChatBotApp'


const App = () => {

  const [isChatting, setIsChatting] = React.useState(false);

  const handleStartChat = () => {
    setIsChatting(true);
  };
  const handleEndChat = () => {
    setIsChatting(false);
  };


  return (
    <div className='container'>
      {isChatting ? (<ChatBotApp onEndChat={handleEndChat} /> ):( <ChatBotStart onStartChat={handleStartChat} />) }
    
    </div>
  )
}

export default App
