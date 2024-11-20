import React from 'react';
import Editor from './components/Editor';
import Dropdown from './components/Dropdown';
import Buttons from './components/Buttons';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Online Code Editor</h1>
      <Dropdown /> {/* Directly connected to Redux */}
      <Editor /> {/* Directly connected to Redux */}
      <Buttons /> {/* Directly connected to Redux */}
    </div>
  );
};

export default App;
