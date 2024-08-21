import './App.css';
import Quiz from "./component/Quiz";
import Result from "./component/Result";
import Header from "./component/Header";
import { useState } from 'react';

function App() {
  let [type, setType] = useState("");
  return (
    <div className="App">
      <Header></Header>
      {/* <Quiz type={type} setType={setType}></Quiz> */}
      <Result></Result>
    </div>
  );
}

export default App;
