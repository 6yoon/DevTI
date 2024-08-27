import "./Quiz.css";

function Quiz({
  setType,
  display,
  setDisplay,
  order,
  setOrder,
  result,
  setResult,
}) {
  const quiz = [
    {
      id: 0,
      content: "처음보는 친구들과의 조별과제 첫 날! 나의 심정은?",
      type1: ["벌써부터 걱정이 태산... 과연 잘 해낼 수 있을까?", "I"],
      type2: ["새로운 사람들과 새로운 경험! 너무 기대된다", "E"],
    },
    {
      id: 1,
      content: "팀원들과의 조별 과제 회의 중 나의 역할은?",
      type1: ["뚜렷한 목표를 정하여 원활히 진행되도록 돕는다", "S"],
      type2: ["아이디어 뱅크! 창의적인 아이디어를 이것저것 추천한다", "N"],
    },
    {
      id: 2,
      content: `본격적인 코딩 시작! 뭐부터 시작해야 할까?`,
      type1: ["일단 코드부터 작성하고 보자!", "P"],
      type2: ["플로우차트부터 천천히 짜볼까?", "J"],
    },
    {
      id: 3,
      content: "주기적으로 만나서 함께 개발하자는 팀원! 나는...",
      type1: ["좋아! 매일 수업 끝나고 도서관에서 모일까?", "E"],
      type2: ["비대면으로 만나는 것도 좋을 것 같아", "I"],
    },
    {
      id: 4,
      content: "코드는 잘 돌아가는데… warning이 너무 많이 뜨네?",
      type1: ["하나하나 찾아서 다 지우고 수정해야 돼!", "J"],
      type2: ["코드만 작동하면 됐지~ 더 이상 건드리지 마!", "P"],
    },
    {
      id: 5,
      content: `조별 과제 팀원이 물었다, "이런 추가 기능은 어때?"`,
      type1: ["필요한 기능일까? 굳이 넣을 필요 없을 것 같아", "T"],
      type2: ["유용하게 쓰진 않을 것 같지만 그래도 넣어주자!", "F"],
    },
    {
      id: 6,
      content: "폭풍 코딩 후 지쳐 잠들어 꿈을 꿨다... 무슨 내용일까?",
      type1: ["꿈에서도 계속 코드를 작성하고 있었다...", "S"],
      type2: ["내가 쓴 코드들이 날개를 달고 날아다니고 있어!", "N"],
    },
    {
      id: 7,
      content: "회의 중 팀원과의 의견 충돌... 어떻게 조율할까?",
      type1: ["적극적으로 의견을 내주는 팀원 걸 더 반영하자!", "F"],
      type2: ["내 아이디어가 더 좋은 것 같으니 내 걸 반영하자!", "T"],
    },
    {
      id: 8,
      content: "조별과제 회의가 끝나갈 때쯤 나의 모습은?",
      type1: [`회의 끝나고 팀원들에게 저녁 먹으러 가자고 해볼까?`, "E"],
      type2: ["피곤하다… 회의 끝나고 정리하면 몇 시지?", "I"],
    },
    {
      id: 9,
      content: "열심히는 하지만 실력이 모자란 팀원... 내가 건낸 말은?",
      type1: ["이정도 결과물이면 괜찮아, 열심히 해줬구나!", "F"],
      type2: ["너의 결과물이 다른 팀원에 비해 조금 부족해", "T"],
    },
    {
      id: 10,
      content: "발표를 위해 프레젠테이션을 만들자! 디자인은?",
      type1: ["정해진 형식에 맞추어 깔끔하게 만들자", "S"],
      type2: ["적당히 개성있고 눈에 띄는 ppt가 좋겠어", "N"],
    },
    {
      id: 11,
      content: "드디어 조별과제 마무리! 팀원들에게 한마디 해주세요!",
      type1: ["최대한의 역량을 발휘해 최고의 결과를 만들자!", "P"],
      type2: ["마지막까지 실수 없이 체계적으로 마무리하자!", "J"],
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
    } else {
      let energy, recognize, decision, life;
      result[0] >= 1 ? (energy = "e") : (energy = "i");
      result[1] >= 1 ? (recognize = "s") : (recognize = "n");
      result[2] >= 1 ? (decision = "t") : (decision = "f");
      result[3] >= 1 ? (life = "j") : (life = "p");
      setType(`${energy + recognize + decision + life}`);
      showResult();
    }
  }

  function showResult() {
    setDisplay({
      Main: "none",
      Story: "none",
      Quiz: "none",
      Result: "",
    });
  }

  return (
    <div className="Quiz" style={{ display: display.Quiz }}>
      <div className="quizBox">
        <div className="bar">
          <div
            className="fillBar"
            style={{ width: `${(order + 1) * 8.3}%` }}
          ></div>
        </div>
        <div className="contentBox">
          <span>{quiz[order].content}</span>
        </div>
        <div className="btnBox">
          <button
            onClick={() => {
              clickBtn(quiz[order].type1[1]);
            }}
          >
            <div>{quiz[order].type1[0]}</div>
          </button>
          <button onClick={() => clickBtn(quiz[order].type2[1])}>
            <div>{quiz[order].type2[0]}</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
