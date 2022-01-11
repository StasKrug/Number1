import React, {useCallback} from "react";
import { Form } from "./form";
import {MessageList} from "./messageList";
import "../App.css";
import {ChatList} from "./chatList";
import { Navigate, useParams} from "react-router";
import { connect} from "react-redux";
import { addMessageWithReply} from "../store/messages/actions";

function Chats({ messages, sendMessage}) {
  const { chatId } = useParams();

  const handleSendMessage = useCallback((newMessage) => {
      sendMessage(chatId, newMessage);
    },
    [chatId, sendMessage]
  );

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
  sendMessage: addMessageWithReply,
};

export const ConnectedChats = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chats);
