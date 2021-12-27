import React, {useCallback, useEffect} from "react";
import { Form } from "./form";
import {MessageList} from "./messageList";
import "../App.css";
import {Authors} from "../utils/constants";
import {ChatList} from "./chatList";
import {
  Navigate,
  useParams,
} from "react-router";

function Chats({ chatList, messages, setMessages, onDeleteChat, onAddChat  }) {
  const { chatId } = useParams();

  const handleSendMessage = useCallback((newMessage) => {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [chatId]: [...prevMessages[chatId], newMessage],
      }));
    },
    [chatId]
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
        <ChatList chatList={chatList}
                  onAddChat={onAddChat}
                  onDeleteChat={onDeleteChat} />
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
