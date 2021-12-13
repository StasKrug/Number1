import React from 'react';
export const Message = ({ message, onMessageClick }) => {
  return (
    <h3 className="App-message" onClick={onMessageClick}>
      {message}
    </h3>
  );
};
