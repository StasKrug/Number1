import { BrowserRouter, Link, Routes, Route} from "react-router-dom";
import { ChatList } from "./components/chatList";
import { ConnectedChats } from "./components/chats";
import { Home } from "./components/home";
import { ConnectedProfile} from "./components/profile";

export const App = () => {

  return (
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
      <Route path="profile" element={<ConnectedProfile />} />
      <Route path="chats">
        <Route index element={<ChatList />} />
        <Route path=":chatId" element={<ConnectedChats />} />
      </Route>
      <Route path="*" element={<h3>404</h3>}/>
    </Routes>
  </BrowserRouter>
  );
};
