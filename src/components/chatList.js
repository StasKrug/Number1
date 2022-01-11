import { ChatItem } from "./chatItem";
import { TextField } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../store/chats/actions";
import { selectChats } from "../store/chats/selectors";

export const ChatList = () => {
  const [value, setValue] = useState("");
  const chatList = useSelector(selectChats);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = `chat${Date.now()}`;
    dispatch(addChat({ name: value, id: newId }));
    setValue("");
  };
  return (
    <div className="App-list">
      <h3>Please select a chat:</h3>
      <ul>
        {chatList.map((chat) => (
            <ChatItem chat={chat} />
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <TextField
          id="filled-basic"
          variant="filled"
          value={value}
          onChange={handleChange} />
        <Button variant="contained" type="submit">ADD CHAT</Button>
      </form>

    </div>
  );
};
