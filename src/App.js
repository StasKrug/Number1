import React, {useState, useCallback} from "react";
import { BrowserRouter, Link, Routes, Route} from "react-router-dom";
import { ChatList } from "./components/chatList";
import Chats from "./components/chats";
import { Home } from "./components/home";
import {Profile} from "./components/profile";
import {Authors} from "./utils/constants";
import { Provider } from "react-redux";
import { store } from "./store/store";

const initialMessages = {
  chat1: [
    {
      text: "Welcome to chat 1",
      author: Authors.human,
      id: "mess1",
    },
  ],
  chat2: [
    {
      text: "Welcome to chat 2",
      author: Authors.human,
      id: "mess2",
    },
  ],
  chat3: [
    {
      text: "Welcome to chat 3",
      author: Authors.human,
      id: "mess3",
    },
  ],
};
const initialChatList = [
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

export const App = () => {
  const [chatList, setChatList] = useState(initialChatList);
  const [messages, setMessages] = useState(initialMessages);

  const handleAddChat = useCallback((name) => {
    const newId = `chat${Date.now()}`;

    setChatList((prevChatList) => [...prevChatList, { name, id: newId }]);
    setMessages((prevMessages) => ({
      ...prevMessages,
      [newId]: [],
    }));
  }, []);

  const handleDeleteChat = useCallback((idToDelete) => {
    setChatList((prevChatList) =>
      prevChatList.filter(({ id }) => id !== idToDelete)
    );
    setMessages((prevMessages) => {
      const newMessages = { ...prevMessages };
      delete newMessages[idToDelete];

      return newMessages;
    });
  }, []);

  return (
  <Provider store={store}>
  <BrowserRouter>
    <ul className="App-link">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/chats">Chats</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="chats">
        <Route index element={
          <ChatList chatList={chatList}
                    onAddChat={handleAddChat}
                    onDeleteChat={handleDeleteChat}
          />}/>
        <Route path=":chatId" element={
          <Chats chatList={chatList}
                 messages={messages}
                 setMessages={setMessages}
                 onAddChat={handleAddChat}
                 onDeleteChat={handleDeleteChat}
          />}/>
      </Route>
      <Route path="*" element={<h3>404</h3>}/>
    </Routes>
  </BrowserRouter>
  </Provider>
  );
};
