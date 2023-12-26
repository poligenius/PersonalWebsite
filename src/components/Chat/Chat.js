import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import '../../static/css/pages/_chat.scss';

const endpoint = '/.netlify/functions/aiAssistant'; // Update the endpoint to your serverless function

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        const display = text.slice(0, currentIndex); // Take substring until current index
        setDisplayText(display.replace(/\\n/g, '\n')); // Replace \n with actual newline
        currentIndex += 1;
      } else {
        clearInterval(interval);
      }
    }, 30); // Adjust the typing speed as needed (milliseconds)
    return () => clearInterval(interval);
  }, [text]);

  const renderLines = () => {
    const lines = displayText.split('\n');
    return lines.map((line) => (
      <React.Fragment key={uuidv4()}>
        {line}
        <br /> {/* Add <br /> after each line */}
      </React.Fragment>
    ));
  };

  return <div>{renderLines()}</div>; // Render lines with proper line breaks
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
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.text();
      }) // Parse the response as text
      .then((botReply) => {
        // Create a new message object for the bot's reply
        const botMessage = { role: 'bot', content: botReply };
        // Add the bot's reply to the chat interface
        setMessages((prevMessages) => [...prevMessages.slice(0, -1), botMessage]);
        setTyping(false);
      })
      .catch(() => {
        // Optionally, you can set an error message in the chat interface
        const errorMessage = { role: 'bot', content: 'Sorry, I was not able to elaborate your question due to a connection error, please try asking the question again or ask a more precise question.' };
        setMessages((prevMessages) => [...prevMessages.slice(0, -1), errorMessage]);
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

          // Inside the mapping of bot messages
          if (message.role === 'bot' && index !== messages.length - 1) {
            const botContent = message.content
              .replace(/"/g, '') // Remove quotes
              .split('\\n') // Split the message by \n
              .map((part, i, array) => (
                <React.Fragment key={uuidv4()}>
                  {part}
                  {i !== array.length - 1 && <br />} {/* Add <br /> between lines */}
                </React.Fragment>
              ));

            return (
              <div key={message.id || index} className={`message message-${message.role}`}>
                <div ref={botMessageRef}>{botContent}</div>
              </div>
            );
          }

          if (message.role === 'user') {
            return (
              <div key={message.id || index} className={`message message-${message.role}`}>
                {message.content.replace(/"/g, '').replace(/\n/g, '')}
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
