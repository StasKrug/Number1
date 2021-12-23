import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ChatList } from "./components/chatList";
import Chats from "./components/chats";
import { Home } from "./components/home";
import {Profile} from "./components/profile";

export const App = () => (
  <BrowserRouter>
    <ul className="App-link">
      <li>
        <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
      </li>
      <li>
        <Link style={{ textDecoration: 'none' }} to="/chats">Chats</Link>
      </li>
      <li>
        <Link style={{ textDecoration: 'none' }} to="/profile">Profile</Link>
      </li>
    </ul>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="chats">
        <Route index element={<ChatList />} />
        <Route path=":chatId" element={<Chats />} />
      </Route>
      <Route path="*" element={<h3>404</h3>} />
    </Routes>
  </BrowserRouter>
);
