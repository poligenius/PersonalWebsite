import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import '../../static/css/pages/_chat.scss';

const endpoint = '/.netlify/functions/aiAssistant'; // Update the endpoint to your serverless function
const geoIpApiKey = process.env.REACT_APP_IPGEO_API_KEY;

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
  const [inputMessage, setInputMessage] = useState('');
  const [chatbotLanguage, setChatbotLanguage] = useState('english');

  useEffect(() => {
    // Function to detect visitor's country based on IP address
    const detectCountry = async () => {
      try {
        const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${geoIpApiKey}`);
        const data = await response.json();
        const countryCode = data.country_code2;
        if (countryCode === 'IT') {
          setChatbotLanguage('italian');
        } else {
          setChatbotLanguage('english');
        }
      } catch (error) {
      }
    };

    // Call the function to detect country when the component mounts
    detectCountry();
  }, []);

  const firstMessage = {
    role: 'bot',
    content:
      chatbotLanguage === 'italian'
        ? 'Piacere di conoscerti, sono Jarvis, chiedimi qualsiasi cosa su Marco, cercherò di rispondere.'
        : 'Nice to meet you, I\'m Jarvis, ask me anything about Marco, I\'ll try to answer.',
  };

  const [messages, setMessages] = useState([firstMessage]);
  const chatBottomRef = useRef(null);
  const botMessageRef = useRef(null);

  useEffect(() => {
    if (chatBottomRef.current && botMessageRef.current) {
      botMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if (typing && chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [typing]);

  async function handleSendMessage() {
    if (inputMessage.trim() === '') return;

    setMessages([...messages, { role: 'user', content: inputMessage }]);
    setTyping(true);
    setMessages((prevMessages) => [...prevMessages, { role: 'bot', content: '...' }]);

    fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({ question: inputMessage }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.text();
      })
      .then((botReply) => {
        const botMessage = { role: 'bot', content: botReply };
        setMessages((prevMessages) => [...prevMessages.slice(0, -1), botMessage]);
        setTyping(false);
      })
      .catch(() => {
        const errorMessage = { role: 'bot', content: chatbotLanguage === 'italian' ? 'Mi dispiace, non sono riuscito a elaborare la tua domanda a causa di un errore di connessione, per favore riprova a fare la domanda o fai una domanda più precisa.' : 'Sorry, I was not able to elaborate your question due to a connection error, please try asking the question again or ask a more precise question.' };
        setMessages((prevMessages) => [...prevMessages.slice(0, -1), errorMessage]);
        setTyping(false);
      });

    setInputMessage('');
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
            const botContent = message.content
              .replace(/"/g, '')
              .split('\\n')
              .map((part, i, array) => (
                <React.Fragment key={uuidv4()}>
                  {part}
                  {i !== array.length - 1 && <br />}
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
