import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="container">
      <h1 className="title">DevTI</h1>
      <hr className="divider" />
      <h2 className="subtitle">개발자 유형 테스트</h2>
      <div className="text">개발자들과 함께 나의 성격 유형을 알아가보자</div>
      <button className="button">테스트 시작하기!</button>
      <div className="EL">컴퓨터소프트웨어공학과 전공동아리 EL</div>
    </div>
  );
};

export default Main;