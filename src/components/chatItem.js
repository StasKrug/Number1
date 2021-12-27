import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import React from "react";

export const ChatItem = ({ chat, onDeleteChat }) => {
  const handleDeleteClick = () => {
    onDeleteChat(chat.id);
  };

  return (
        <div className="ChatList-item">
          <li key={chat.id}>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "darkcyan" : "white" })}
              to={`/chats/${chat.id}`}>
              {chat.name}
            </NavLink>
          </li>
          <Button variant="outlined" onClick={handleDeleteClick}>
            X
          </Button>
        </div>
  );
};
