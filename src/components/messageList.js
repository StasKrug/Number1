import React, {useCallback} from 'react';
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {deleteMessage} from "../store/messages/actions";
import {useParams} from "react-router";

export const MessageList = ({messages}) => {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const handleDeleteMessage = (e) => {
   dispatch(deleteMessage(chatId, e.target.id));
  };

  return messages.map((message) =>
    <div className="App-message" key={message.id}>
      <span>{message.author}</span> : <span>{message.text}</span>
      <Button onClick={handleDeleteMessage} id={message.id}> X </Button>
    </div>);
}
