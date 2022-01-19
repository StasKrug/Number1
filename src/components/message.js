import React from 'react';

export const Message = ({message}) => {

  return (
    <div className="App-message">
      <span>{message.author}</span> : <span>{message.text}</span>
    </div>
  );

};



