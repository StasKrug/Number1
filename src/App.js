import React from "react";
import {persistor, store} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {Router} from "./components/routes";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};
