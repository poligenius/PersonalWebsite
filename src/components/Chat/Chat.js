import React, { useState } from 'react';
// import axios from 'axios'; // You can keep axios for making requests to the serverless function
import '../../static/css/pages/_chat.scss';

const endpoint = '/.netlify/functions/gpt3'; // Update the endpoint to your serverless function

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  function handleSendMessage() {
    if (inputMessage.trim() === '') return;

    // Add the user's message to the chat interface
    setMessages([...messages, { role: 'user', content: inputMessage }]);

    fetch(endpoint)
      .then((res) => (res.json()))
      .then((data) => {
        const botReply = data;
        setMessages([...messages, { role: 'bot', content: botReply }]);
      });

    setInputMessage(''); // Clear the input field
  }

  return (
    <div className="chat-popup">
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message message-${message.role}`}>
            {message.content}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type here your question..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />
        <button type="button" onClick={handleSendMessage}>
          <i className="fas fa-paper-plane" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
