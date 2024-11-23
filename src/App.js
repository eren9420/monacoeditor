import React, { useState } from "react";
import Editor from "./components/Editor";
import Dropdown from "./components/Dropdown";
import Buttons from "./components/Buttons";
import "./App.css";

const App = () => {
  const [output, setOutput] = useState("Output will appear here...");

  return (
    <div className="app">
      <h1>Online Code Editor</h1>
      <Dropdown />
      <Editor />
      <div className="output-container">{output}</div> 
      <Buttons setOutput={setOutput} /> 
    </div>
  );
};

export default App;
