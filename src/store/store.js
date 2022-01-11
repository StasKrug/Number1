import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { chatsReducer } from "./chats/reducer";
import { profileReducer } from "./profile/reducer";
import { messagesReducer } from "./messages/reducer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const config = {
  key: "gbMess",
  storage,
  blacklist: ["profile"],
};
const persistedReducer = persistReducer(
  config,
  combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
  })
);

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);
