import { useEffect, useState } from "react";
import "./Result.css";

function Result({type}) {
    let [resultText, setResultText] = useState(["", ""])
  const typeResult = [
    {
      type: "esfp",
      dev: "프론트엔드 개발자",
      char: "누구보다 활발하고 에너지있는 당신은..",
      content:
        "웹사이트 또는 앱에서 사용자가 실제로 보고 상호작용하는 인터페이스의 디자인과 기능을 구현하는",
      color: "yellow",
    },
    {
      type: "intp",
      dev: "백엔드 개발자",
      char: "누구보다 논리적으로 공상하는 당신은…",
      content:
        "웹사이트 또는 앱에서 사용자에게 직접 보이지 않는 데이터 처리와 정보를 제공하며 서버, 데이터베이스, API 등을 구현하는",
      color: "pink",
    },
    {
      type: "estp",
      dev: "풀스텍 개발자",
      char: "누구보다 도전적이고 지적인 당신은…",
      content:
        "프론트엔드와 백엔드를 모두 이해하고 다양한 기술과 도구를  다뤄 웹사이트 또는 앱을 종합적으로 관리하는",
      color: "yellow",
    },
    {
      type: "entp",
      dev: "AI 개발자",
      char: "누구보다 엉뚱하지만 호기심이 많은 당신은…",
      content:
        "머신 러닝, 딥 러닝, 자연어 처리 등을 포함한 기술을 사용하여 데이터 분석, 모델링, 알고리즘 개발을 수행하는",
      color: "pink",
    },
    {
      type: "enfp",
      dev: "게임 개발자",
      char: "누구보다 무궁무진한 창의력을 가진 당신은…",
      content:
        "기획, 알고리즘, 그래픽 자료, 사운드 등 각각의 요소들을 결합시켜 컴퓨터 게임 또는 비디오 게임을 제작하는",
      color: "green",
    },
    {
      type: "isfp",
      dev: "iOS 개발자",
      char: "누구보다 매력있고 양파같은 당신은…",
      content:
        "애플이 만든 모바일 운영체제인 iOS 안에서 아이폰, 아이패드 등에서 사용되는 어플리케이션을 개발하는",
      color: "pink",
    },
    {
      type: "infj",
      dev: "안드로이드 개발자",
      char: "누구보다 신비롭고 영감이 넘치는 당신은…",
      content:
        "구글이 만든 안드로이드 운영체제 안에서 다양한 어플리케이션을 개발하는",
      color: "pink",
    },
    {
      type: "intj",
      dev: "데이터베이스 개발자",
      char: "누구보다 철두철미하게 정리해나가는 당신은…",
      content:
        "컴퓨터가 다룰 수 있는 모든 종류의 데이터를 저장 및 처리하고 관리하는 시스템을 동작하게 하는",
      color: "pink",
    },
    {
      type: "istj",
      dev: "보안 엔지니어",
      char: "누구보다 원칙적이고 정직한 당신은...",
      content:
        "보안 소프트웨어를 확인하고 네트워크 및 시스템에 대한 공격을 방지하며 컴퓨터를 보호할 수 있는 기술을 설계하고 구축하는",
      color: "pink",
    },
    {
      type: "estj",
      dev: "데브옵스 엔지니어",
      char: "누구보다 주도적으로 리더쉽을 발휘하는 당신은…",
      content:
        "코딩, 인프라 관리, 시스템 관리 및 DevOps 도구 체인을 포함하여 개발 및 운영에 대한 광범위한 지식을 갖춘",
      color: "pink",
    },
    {
      type: "isfj",
      dev: "빅데이터 개발자",
      char: "누구보다 헌신적이고 기억력이 좋은 당신은…",
      content:
        "빅데이터 기술을 사용하기 위해서 환경을 구축하고 빅데이터 처리 컴퓨팅 기술을 통해 빅데이터 분석 플랫폼을 개발하는",
      color: "pink",
    },
    {
      type: "istp",
      dev: "임베디드 개발자",
      char: "누구보다 현실적이고 재능있는 당신은…",
      content:
        "기계나 제어가 필요한 특정 기능을 수행하는 컴퓨터 시스템의 하드웨어 또는 소프트웨어를 설계 및 개발하는",
      color: "pink",
    },
    {
      type: "esfj",
      dev: "시스템 개발자",
      char: "누구보다 세심하고 모두와 친한 당신은…",
      content:
        "컴퓨터를 작동시키고 각 부품의 활동을 통제하는 윈도우, 맥, 리눅스와 같은  소프트웨어를 연구, 개발, 설계하는",
      color: "pink",
    },
    {
      type: "infp",
      dev: "데이터 사이언티스트",
      char: "누구보다 이타적으로 남을 배려하는 당신은…",
      content:
        "방대한 데이터를 수집하고 정제하고 모델하여 분석 및 시각화 과정을 통해 문제의 솔루션을 찾아 제공하고 개선하는",
      color: "pink",
    },
    {
      type: "entj",
      dev: "클라우드 엔지니어",
      char: "누구보다 전문적이고 실행력 있는 당신은…",
      content:
        "기업이나 조직의 클라우드 인프라를 설계하고 유지보수 관리 통해 효율적인 it 인프라를 구축하는",
      color: "pink",
    },
    {
      type: "enfj",
      dev: "블록체인 개발자",
      char: "누구보다 사람들 속에서 중심이 되는 당신은…",
      content:
        "블록체인 기술을 사용하여 분산 시스템을 구축하고 유지보수하며 네트워크의 프로토콜을 개발하여 안전하고 효율적인 거래를 보장하는",
      color: "pink",
    },
  ];
  const resultImg = [{}];
  function makeType(input) {
    let foundResult= typeResult.find(item => item.type === "estp");
    setResultText([foundResult.dev, foundResult.char, foundResult.content])
  }

  useEffect(()=> {
    makeType(type)
  }, [type])

  return (
    <div className="Result">
      <div className="imgBox">
        <div>
        </div>
        <img alt="result"></img>
      </div>
      <div className="btnBox">
        <button>
          <div>테스트 다시 하기</div>
        </button>
        <button>
          <div>EL 지원하러 가기</div>
        </button>
      </div>
    </div>
  );
}

export default Result;
