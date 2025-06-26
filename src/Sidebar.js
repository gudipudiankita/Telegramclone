import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  // Define chat names
  const chats = [
    { id: 1, name: 'Ankita' },
    { id: 2, name: 'Sarayu' },
    { id: 3, name: 'Pradeep' },
  ];

  return (
    <div className="sidebar">
      <h2>Chats</h2>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chat/${chat.id}`}>{chat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;