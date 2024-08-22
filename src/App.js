import React, { useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Story from "./component/Story";
import Quiz from "./component/Quiz";
import Result from "./component/Result";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  let [type, setType] = useState("");
  let [display, setDisplay] = useState({
    Main: "",
    Story: "none",
    Quiz: "none",
    Result: "none",
  });
  const [order, setOrder] = useState(0);
  const [result, setResult] = useState([0, 0, 0, 0]);
  return (
    <div className="App">
      <Header></Header>
      <Main display={display} setDisplay={setDisplay}></Main>
      <Story display={display} setDisplay={setDisplay}></Story>
      <Quiz
        setType={setType}
        display={display}
        setDisplay={setDisplay}
        order={order}
        setOrder={setOrder}
        result={result}
        setResult={setResult}
      ></Quiz>
      <Result
        type={type}
        display={display}
        setDisplay={setDisplay}
        setOrder={setOrder}
        setResult={setResult}
      ></Result>
      <Footer></Footer>
    </div>
  );
}

export default App;
