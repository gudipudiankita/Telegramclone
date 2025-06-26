import React from 'react';

const ChatList = ({ chats, onSelectChat }) => {
  return (
    <div style={styles.chatList}>
      {chats.map((chat) => (
        <div key={chat.id} style={styles.chatItem} onClick={() => onSelectChat(chat.id)}>
          <h4>{chat.name}</h4>
          <p>{chat.lastMessage}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  chatList: {
    width: '100%',
  },
  chatItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    cursor: 'pointer',
  },
};

export default ChatList;