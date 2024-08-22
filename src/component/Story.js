import React from "react";
import "./Story.css";

const Story = ({display, setDisplay}) => {
  function showQuiz(){
    setDisplay({
      Main: "none",
      Story: "none",
      Quiz: "",
      Result: "none"
    })
  }
  return (
    <div className="Story" style={{display: display.Story}}>
      <h1 className="title">이야기</h1>
      <h2 className="subtitle">어젯밤 꿈 속에서...</h2>
      <div className="story">
        {` 
나는 대기업에서 일하는 신입 개발자가 되었다...

그리고 드디어 내가 참여하는 첫 프로젝트가 시작되었다!

프로젝트를 진행해가며 다양한 상황을 마주하게 되는데...
.
.
.

갑자기 궁금해지는걸?
        `}
      </div>
      <div className="text">나는 어떤 개발자였을까?</div>
      <button className="button" onClick={showQuiz}>기억을 되짚어보자!</button>
    </div>
  );
};

export default Story;
