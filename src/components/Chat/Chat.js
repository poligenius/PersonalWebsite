import React, { useState, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

import '../../static/css/pages/_chat.scss';

const endpoint = '/.netlify/functions/aiAssistant'; // Update the endpoint to your serverless function

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex += 1;
      } else {
        clearInterval(interval);
      }
    }, 30); // Adjust the typing speed as needed (milliseconds)
    return () => clearInterval(interval);
  }, [text]);

  return <p>{displayText}</p>;
};

TypingText.propTypes = {
  text: PropTypes.string.isRequired,
};

const Chat = () => {
  const [typing, setTyping] = useState(false);
  const firstMessage = { role: 'bot', content: 'Nice to meet you, I\'m Jarvis, ask me anything about Marco, I\'ll try to answer.' };
  const [messages, setMessages] = useState([firstMessage]);
  const [inputMessage, setInputMessage] = useState('');

  const chatBottomRef = useRef(null);
  const botMessageRef = useRef(null);

  useEffect(() => {
    if (chatBottomRef.current && botMessageRef.current) {
      botMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (typing) {
      if (chatBottomRef.current) {
        chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [typing]);

  async function handleSendMessage() {
    if (inputMessage.trim() === '') return;

    // Add the user's message to the chat interface
    setMessages([...messages, { role: 'user', content: inputMessage }]);

    setTyping(true);

    setMessages((prevMessages) => [...prevMessages, { role: 'bot', content: '...' }]);

    // Send the user's message to the serverless function
    fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({ question: inputMessage }), // Send the question in the request body
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.text()) // Parse the response as text
      .then((botReply) => {
        // Create a new message object for the bot's reply
        const botMessage = { role: 'bot', content: botReply };
        // Add the bot's reply to the chat interface
        setMessages((prevMessages) => [...prevMessages.slice(0, -1), botMessage]);
        setTyping(false);
      });

    setInputMessage(''); // Clear the input field
  }

  return (
    <div className="chat-popup">
      <div className="chat-messages">
        {messages.map((message, index) => {
          if (message.role === 'bot' && index === messages.length - 1 && index !== 0 && typing) {
            return (
              <div key={message.id || index} className={`message message-${message.role}`}>
                <div className="typing-dots">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
              </div>
            );
          }

          if (message.role === 'bot' && index !== messages.length - 1) {
            return (
              <div key={message.id || index} className={`message message-${message.role}`}>
                <div ref={botMessageRef} /> {/* Bot's message specific ref */}
                {message.content.replace(/"/g, '').replace(/\/n/g, '')}
              </div>
            );
          }

          if (message.role === 'user') {
            return (
              <div key={message.id || index} className={`message message-${message.role}`}>
                {message.content.replace(/"/g, '').replace(/\/n/g, '')}
              </div>
            );
          }

          return (
            <div key={message.id || index} className={`message message-${message.role}`}>
              <TypingText text={message.content.replace(/"/g, '').replace(/\/n/g, '')} />
            </div>
          );
        })}
        <div ref={chatBottomRef} />
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
