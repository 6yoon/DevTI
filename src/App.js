import React, { useState } from 'react';
import Story from './component/Story';
import Header from './component/Header';
import Quiz from './component/Quiz';
import Result from './component/Result';
import './App.css';

function App() {
  let [type, setType] = useState("");
  return (
    <div className="App">
      <Header></Header>
      {/* <Quiz setType={setType}></Quiz> */}
      <Result type={type}></Result>
      <Story />
    </div>
  );
}

export default App;

