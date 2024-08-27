import React from "react";
import start from "./../src-assets/start.png";
import "./Main.css";

const Main = ({ display, setDisplay }) => {
  function showStory() {
    setDisplay({
      Main: "none",
      Story: "",
      Quiz: "none",
      Result: "none",
    });
  }
  return (
    <div className="Main" style={{ display: display.Main }}>
      <div className="alert">
        <span>이 테스트는 재미를 위함이니 진지하게 받아들이지 말아주세요!</span>
        <span>개발 전공생이 아니어도 참여할 수 있는 테스트입니다!</span>
      </div>
      <div className="title">개발자 유형 테스트</div>
      <div className="text">
        내 성격은 어떤 개발자와 맞을까? 지금 바로 테스트해보세요!
      </div>
      <img className="startImg" src={start} alt="start" oncontextmenu="return false"></img>
      <button className="button" onClick={showStory}>
        테스트 시작하기!
      </button>
    </div>
  );
};

export default Main;
