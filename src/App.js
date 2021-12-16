import {useCallback, useEffect, useState} from "react";
import { Form } from "./components/form";
import {MessageList} from "./components/messageList";
import "./App.css";
import {Authors} from "./utils/constants";

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
        text: "Hi! The droid listen and record...",
        id: ` mess-${Date.now()}`
      }), 1500);
      return ()=> clearTimeout(timeout);
    }
  },[messages])
  return (
    <div className="App">
        <div className="App-form">
        <div className="Form-field">
          <MessageList messages={messages}/>
        </div>
        <Form onSendMessage={handleSendMessage}/>
        </div>
    </div>
  );
}

export default App;
