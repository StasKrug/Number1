import {useCallback, useEffect, useState} from "react";
import { Form } from "./components/form";
import {MessageList} from "./components/messageList";
import "./App.css";
import {Authors} from "./utils/constants";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const initialMessages = [];
function App() {
  const [messages, setMessage] = useState(initialMessages);
  const handleSendMessage = useCallback((newMessage) => {
    setMessage(prevMessage =>[...prevMessage, newMessage]);
  },[])

  useEffect(()=>{
    if(messages.length && messages[messages.length - 1].author!== Authors.bot){
      const timeout = setTimeout(()=>
      handleSendMessage({
        author: Authors.bot,
        text: "Hi! The droid listens and records...",
        id: ` mess-${Date.now()}`
      }), 1500);
      return ()=> clearTimeout(timeout);
    }
  },[messages])
  return (
    <div className="App">
        <div className="App-form">
          <List className="App-list">
            <ListItem key='1'>Chat One</ListItem>
            <ListItem key='2'>Chat Two</ListItem>
          </List>
          <div className="App-field">
            <div className="Form-field">
               <MessageList messages={messages}/>
            </div>
            <Form onSendMessage={handleSendMessage}/>
          </div>
        </div>
    </div>
  );
}

export default App;
