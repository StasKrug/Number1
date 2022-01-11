import React, {useCallback, useEffect} from "react";
import { Form } from "./form";
import {MessageList} from "./messageList";
import "../App.css";
import {Authors} from "../utils/constants";
import {ChatList} from "./chatList";
import { Navigate, useParams} from "react-router";
import { connect} from "react-redux";
import { addMessage } from "../store/messages/actions";

function Chats({ messages, sendMessage}) {
  const { chatId } = useParams();

  const handleSendMessage = useCallback((newMessage) => {
      sendMessage(chatId, newMessage);
    },
    [chatId, sendMessage]
  );
  useEffect(()=>{
    if(messages[chatId]?.length && messages[chatId]?.[messages[chatId]?.length - 1].author!== Authors.bot){
      const timeout = setTimeout(()=>
        handleSendMessage({
          author: Authors.bot,
          text: "Hi! The droid listen and record...",
          id: ` mess-${Date.now()}`
        }), 1500);
      return ()=> clearTimeout(timeout);
    }
  },[messages])


  if (!messages[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className="App" >
      <div className="App-form">
        <ChatList />
        <div className="App-field">
          <div className="Form-field">
            <MessageList messages={messages[chatId]}/>
          </div>
          <Form onSendMessage={handleSendMessage}/>
        </div>
      </div>
    </div>

  );
}

export default Chats;

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = {
  sendMessage: addMessage,
};

export const ConnectedChats = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chats);
