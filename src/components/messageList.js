import React from 'react';

export const MessageList = ({messages}) => {

  return messages.map((message) =>
    <div className="App-message" key={message.id}>
      <span>{message.author}</span> : <span>{message.text}</span>
    </div>);
}
