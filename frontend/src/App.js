import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  async function fetchMessage() {
    const res = await fetch("http://localhost:5000/api/message");
    const data = await res.json();
    setMessage(data.message);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-link" onClick={fetchMessage}>
          fetch message
        </div>
        <div>message is: {message}</div>
      </header>
    </div>
  );
}

export default App;
