import { ChatItem } from "./chatItem";
import { TextField } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChatWithFb, initChatsTracking, } from "../store/chats/actions";
import { selectChats } from "../store/chats/selectors";

export const ChatList = () => {
  const [value, setValue] = useState("");
  const chatList = useSelector(selectChats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initChatsTracking());
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = `chat${Date.now()}`;
    dispatch(addChatWithFb({ name: value, id: newId }));
    setValue("");
  };
  return (
    <div className="App-list">
       <h3>Please select a chat:</h3>
       <ul>
         {chatList.map((chat) => (
           <li key={chat.id}>
             <ChatItem chat={chat} />
           </li>
         ))}
       </ul>
       <form onSubmit={handleSubmit}>
         <TextField
          id="filled-basic"
          variant="standard"
          value={value}
          onChange={handleChange} />
         <Button variant="contained" type="submit">ADD CHAT</Button>
       </form>
     </div>
  );
};
