import React from 'react';
import { useParams } from 'react-router-dom';
import ChatWindow from './ChatWindow';

const Chat = () => {
  const { id } = useParams(); // Get the chat ID from the URL

  // Define different chats with custom names and messages
  const chats = {
    1: {
      name: 'Ankita',
      messages: [
        { sender: 'user', text: 'Hello!', time: '10:00 AM' },
        { sender: 'other', text: 'Hi there!', time: '10:05 AM' },
        { sender: 'user', text: 'How are you?', time: '10:10 AM' },
      ],
    },
    2: {
      name: 'Sarayu',
      messages: [
        { sender: 'user', text: 'Good morning!', time: '9:00 AM' },
        { sender: 'other', text: 'Morning!', time: '9:05 AM' },
        { sender: 'user', text: 'What are your plans for today?', time: '9:10 AM' },
      ],
    },
    3: {
      name: 'Pradeep',
      messages: [
        { sender: 'user', text: 'Hey!', time: '11:00 AM' },
        { sender: 'other', text: 'Hey! How can I help you?', time: '11:05 AM' },
        { sender: 'user', text: 'Can we meet tomorrow?', time: '11:10 AM' },
      ],
    },
  };

  // Get the chat data for the current chat ID
  const chat = chats[id] || { name: 'Unknown', messages: [] };

  return (
    <div className="chat-page">
      <h2>{chat.name}</h2> {/* Display the custom chat name */}
      <ChatWindow messages={chat.messages} />
    </div>
  );
};

export default Chat;