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
      <h2 className="subtitle">컴퓨터공학부에 입학하게 된 나!</h2>
      <div className="story">
        {`
아직 부족한 개발 실력이지만

컴공과 친구들과 조별 과제를 하게 되었다

분명 좋은 기회가 될 거야!

.
.
.

하지만 쉽지만은 않을지도...
        `}
      </div>
      <div className="text">{`조별 과제의 시행착오 속에서 드러난 나의 성격!
내 성격은 어떤 개발자와 맞을까?`}</div>
      <button className="button" onClick={showQuiz}>시작</button>
    </div>
  );
};

export default Story;
