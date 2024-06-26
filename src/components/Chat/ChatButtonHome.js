import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chat from './Chat';
import '../../static/css/pages/_chat.scss';

const { PUBLIC_URL } = process.env;

// retrieving browser lnguage
const userLanguage = navigator.language || navigator.userLanguage;

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
    }, 100); // Adjust the typing speed as needed (milliseconds)
    return () => clearInterval(interval);
  }, [text]);

  return <p>{displayText}</p>;
};

TypingText.propTypes = {
  text: PropTypes.string.isRequired,
};

const ChatButtonHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [chatbotLanguage, setChatbotLanguage] = useState('english'); // Default language is English

  useEffect(() => {
    // Function to detect visitor's country based on IP address
    const detectCountry = async () => {
      console.log(userLanguage);
      if (userLanguage === 'it-IT') {
        setChatbotLanguage('italian');
      } else {
        setChatbotLanguage('english');
      }
    };

    // Call the function to detect country when the component mounts
    detectCountry();

    // Use a timeout to display the text after a delay when the component mounts
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 2000); // Adjust the delay time as needed

    // Clean up the timeout
    return () => clearTimeout(timeout);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowText(false);
  };

  return (
    <div>
      <div className="chat-button" onClick={toggleChat}>
        <img src={`${PUBLIC_URL}/images/chat/chatbot.png`} alt="Chat Icon" />
      </div>
      {showText && (
        <div className="text-bubble">
          <TypingText
            text={
              chatbotLanguage === 'italian'
                ? 'Ciao, sono Jarvis. Clicca su di me per fare domande su Marco.'
                : 'Hi, I\'m Jarvis. Click me to ask questions about Marco.'
            }
          />
        </div>
      )}
      {isOpen && <Chat />}
    </div>
  );
};

export default ChatButtonHome;
