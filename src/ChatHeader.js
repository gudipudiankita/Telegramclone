import React from 'react';

const ChatHeader = ({ chatName }) => {
  return (
    <div style={styles.header}>
      <h3>{chatName}</h3>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#fff',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

export default ChatHeader;