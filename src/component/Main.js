import React from 'react';
import start from './../src-assets/start.png'
import './Main.css';

const Main = ({display, setDisplay}) => {
  function showStory(){
    setDisplay({
      Main: "none",
      Story: "",
      Quiz: "none",
      Result: "none"
    })
  }
  return (
    <div className="Main" style={{display: display.Main}}>
      <div className="subtitle">개발자 유형 테스트</div>
      <div className="text">내 성격은 어떤 개발자와 맞을까?
      지금 바로 테스트해보세요!</div>
      <img className='startImg' src={start} alt="start"></img>
      <button className="button" onClick={showStory}>테스트 시작하기!</button>
    </div>
  );
};

export default Main;