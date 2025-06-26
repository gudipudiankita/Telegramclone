import React from 'react';

const Message = ({ message }) => {
  return (
    <div className={`message ${message.sender}`}>
      <p>{message.text}</p>
      <span>{message.time}</span>
    </div>
  );
};

export default Message;