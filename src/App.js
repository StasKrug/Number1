import { BrowserRouter, Link, Routes, Route} from "react-router-dom";
import { ChatList } from "./components/chatList";
import { ConnectedChats } from "./components/chats";
import { Home } from "./components/home";
import { ConnectedProfile} from "./components/profile";
import {persistor, store} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Articles } from "./components/articles";

export const App = () => {

  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
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
      <li>
        <Link to="/articles">Articles</Link>
      </li>
    </ul>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="profile" element={<ConnectedProfile />} />
      <Route path="chats">
        <Route index element={<ChatList />} />
        <Route path=":chatId" element={<ConnectedChats />} />
      </Route>
      <Route path="articles" element={<Articles />} />
      <Route path="*" element={<h3>404</h3>}/>
    </Routes>
  </BrowserRouter>
    </PersistGate>
    </Provider>
  );
};
