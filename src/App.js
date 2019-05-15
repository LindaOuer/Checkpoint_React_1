import React from "react";
import logo from "./GOT.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p className="para1" alt="para1">
          <blockquote>
            Leave one wolf alive and the sheep are never safe.
          </blockquote>
        </p>
        <hr />
        <h2>Another Quote !!!</h2>
        <br />

        <p className="para2" alt="para2">
          <blockquote>
            I know Death. He's got many faces. I look forward to seeing this
            one.
          </blockquote>
        </p>
      </header>
    </div>
  );
}

export default App;
