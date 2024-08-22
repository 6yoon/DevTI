import React from "react";
import "./Story.css";

const Story = () => {
  return (
    <div className="container">
      <h1 className="title">STORY</h1>
      <hr className="divider" />
      <h2 className="subtitle">어젯밤 꿈 속에서...</h2>
      <div className="story">
        {`
나는 유명 기업에서 일하는 개발자가 되었다.

우리 팀은 중요한 프로젝트를 맡고 있었고,

성공적으로 프로젝트를 완수해가며 다양한 상황을 마주하게 되는데...
.
.
.

갑자기 궁금해지는걸?
        `}
      </div>
      <div className="text">나는 어떤 개발자였을까?</div>
      <button className="button">기억을 되짚어보자!</button>
    </div>
  );
};

export default Story;
