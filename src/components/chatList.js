import { NavLink } from "react-router-dom";
import { TextField } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

const chatList = [
  {
    name: "CHAT 1",
    id: "chat1",
  },
  {
    name: "CHAT 2",
    id: "chat2",
  },
  {
    name: "CHAT 3",
    id: "chat3",
  },
];

export const ChatList = () => {
  const deleteChat = (id) => {
    chatList.forEach(element => {
      if (element.id === id){
        const index = chatList.findIndex(n => n.id === id);
        if (index !== -1) {
          chatList.splice(index, 1);
        }

        console.log(chatList);
      }
    });
  }

  const addChat = (e) => {
    console.log(e.target);
  }

  return (
    <div className="App-list">
      <h3>Please select a chat:</h3>
      <ul>
        {chatList.map((chat) => (
          <div className="ChatList-item">
            <li key={chat.id}>
              <NavLink style={({ isActive }) => ({ color: isActive ? "darkred" : "black" }) }
                to={`/chats/${chat.id}`}>
                {chat.name}
              </NavLink>
            </li>
            <Button variant="outlined" onClick={deleteChat.bind(null, chat.id)}>
              X
            </Button>
          </div>
        ))}
      </ul>

      <TextField
        id="filled-basic"
        variant="filled"
        // value={value}
        // onChange={handleChange}
        // inputRef={inputRef}
      />
      <Button variant="contained" onClick={addChat} >
        ADD CHAT
      </Button>

    </div>
  );
};
