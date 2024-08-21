import { useState } from "react";
import "./Quiz.css";

function Quiz({type, setType}) {
    const [order, setOrder] = useState(0);
    const [result, setResult] = useState([0, 0, 0, 0]);
    const quiz = [
      {
        id: 0,
        content: "프로젝트 회의가 끝나갈 때쯤 나의 모습은?",
        type1: ["회의 끝나고 팀원들에게 저녁 먹으러 가자고 해볼까?", "E"],
        type2: ["피곤하다… 회의 끝나고 정리하면 몇 시지?", "I"],
      },
      {
        id: 1,
        content: "프로젝트 개발 속도가 더뎌지고 있다... 내가 제시한 해결책은?",
        type1: ["규칙적으로 모여서 함께 개발하는 시간을 가져볼까요?", "E"],
        type2: ["각자 서로의 작업량을 매일 온라인으로 공유해볼까요?", "I"],
      },
      {
        id: 2,
        content: "우리 프로젝트에 새로운 기술 스택을 도입한다고 한다!",
        type1: ["매번 쓰는 그 기술이면 좋겠다, 안정적이니까", "S"],
        type2: ["이왕이면 요즘 뜨는 저 기술이면 좋겠다. 혁신적이잖아", "N"],
      },
      {
        id: 3,
        content: "후임에게 쓴 소리를 해야 할 때, 어떤 식으로?",
        type1: ["그래도 상처받지 않도록, 부드럽게 말하자", "F"],
        type2: [
          "말을 조금 강하게 하더라도, 고쳐야 할 사항을 명확하게 알려주자",
          "T",
        ],
      },
      {
        id: 4,
        content: "드디어 회의 끝! 다음 회의 일정이 언제였더라?",
        type1: ["까먹지 않게 일정 추가 해놔야 겠다", "J"],
        type2: ["그때 쯤 되면 알아서 누가 알려주겠지~", "P"],
      },
      {
        id: 5,
        content: "중간 보고! 우리 팀 프로젝트는 아직 덜 완성되었는데…",
        type1: [
          "사례를 통해 앞으로의 가능성을 어필하여 부족한 부분을 채우자",
          "N",
        ],
        type2: [
          "지금까지의 데이터를 정확하게 보고하여 잘 되고 있음을 강조하자",
          "S",
        ],
      },
      {
        id: 6,
        content: "팀원이 제시한 의견을 토대로 코드를 작성할 때...",
        type1: ["굳이 필요하지 않은 것 같은데... 이 부분은 그냥 빼야겠다", "T"],
        type2: ["유용하게 쓰진 않을 것 같지만 그래도 넣어주자!", "F"],
      },
      {
        id: 7,
        content:
          "프로젝트에 필요한 새로운 알고리즘을 구현해 봐야겠다. 뭐부터 시작할까?",
        type1: ["일단 코드부터 작성하고 보자!", "P"],
        type2: ["플로우차트부터 천천히 짜볼까?", "J"],
      },
      {
        id: 8,
        content: "프로젝트를 진행하면서 새로운 사람들과 협업을 하게 되었다!",
        type1: ["벌써부터 걱정이 태산... 적응하려면 얼마나 걸릴까?", "I"],
        type2: ["새로운 사람들과 새로운 경험! 너무 기대된다", "E"],
      },
      {
        id: 9,
        content: "폭풍 코딩 후 지쳐 잠들어 생생한 꿈을 꿨다... 무슨 내용일까?",
        type1: ["내가 작성하던 코드를 꿈에서도 계속 작성하고 있었다...", "S"],
        type2: ["내가 쓴 코드들이 날개를 달고 날아다니고 있어!", "N"],
      },
      {
        id: 10,
        content: "일주일 간 작성한 코드의 50%가 날아갔다... 어떻게 이럴 수가!",
        type1: ["멘탈이 제대로 나가버렸어… 난 못해… 의욕을 상실했다", "F"],
        type2: [
          "너무 속상하지만 어쩔 수 없다… 빨리 코드를 복구하는 게 좋겠어",
          "T",
        ],
      },
      {
        id: 11,
        content: "드디어 프로젝트 마무리 단계! 팀원들에게 한마디 해주세요!",
        type1: ["최대한 역량을 발휘해 최고의 결과를 만들자!", "P"],
        type2: ["마지막까지 실수없이 체계적으로 마무리하자!", "J"],
      },
    ];

  function clickBtn(type) {
    if (order < 11) {
      let copyresult = [...result];

      switch (type) {
        case "E":
          copyresult[0] = copyresult[0] + 1;
          break;
        case "I":
          copyresult[0] = copyresult[0] - 1;
          break;
        case "S":
          copyresult[1] = copyresult[1] + 1;
          break;
        case "N":
          copyresult[1] = copyresult[1] - 1;
          break;
        case "T":
          copyresult[2] = copyresult[2] + 1;
          break;
        case "F":
          copyresult[2] = copyresult[2] - 1;
          break;
        case "J":
          copyresult[3] = copyresult[3] + 1;
          break;
        case "P":
          copyresult[3] = copyresult[3] - 1;
          break;
        default:
      }
      setResult(copyresult);
      setOrder(order + 1);
    }
    else{
        let energy, recognize, decision, life
        result[0] >= 1 ? energy = "e" : energy = "i";
        result[1] >= 1 ? recognize = "s" : recognize = "n";
        result[2] >= 1 ? decision = "t" : decision = "f";
        result[3] >= 1 ? life = "j" : life = "p";
        setType(`${energy + recognize + decision + life}`)
    }
  }
  return (
    <div className="Quiz">
      <div className="quizBox">
        <div className="bar">
          <div
            className="fillBar"
            style={{ width: `${(order + 1) * 35}px` }}
          ></div>
        </div>
        <div className="contentBox">
          <span>{quiz[order].content}</span>
        </div>
        <div className="btnBox">
          <button onClick={() => clickBtn(quiz[order].type1[1])}>
            <div>{quiz[order].type1[0]}</div>
          </button>
          <button onClick={() => clickBtn(quiz[order].type2[1])}>
            <div>{quiz[order].type2[0]}</div>
          </button>
          <div>{type}</div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
