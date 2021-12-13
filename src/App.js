import { useState } from "react";
import { Message } from "./components/message";
import "./App.css";

function App() {
  const [text, setText] = useState("First task React. Click on the text.");

  const handleClick = () => {
    alert("Click event triggered.");
    setText("Cheange text");
  };
  return (
    <div className="App">
      <header className="App-header">
        <Message message={text} onMessageClick={handleClick} />
        <p className="App-message">
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
