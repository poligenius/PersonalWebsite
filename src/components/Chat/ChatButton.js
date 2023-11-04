// ChatButton.js
import React, { useState } from 'react';
import Chat from './Chat';
import '../../static/css/pages/_chat.scss';

const { PUBLIC_URL } = process.env;

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="chat-button" onClick={toggleChat}>
        <img src={`${PUBLIC_URL}/images/chat/chatbot.png`} alt="Chat Icon" />
      </div>
      {isOpen && <Chat />}
    </div>
  );
};

export default ChatButton;
