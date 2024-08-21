import { useState } from "react";
import "./Result.css";

function Result() {
    const [type, setType] = useState("");
    const resultImg = [
        {}
    ];
    function makeType(){

    }
    return (
      <div className="Result">
        <div className="imgBox">

        </div>
        <div className="btnBox">
            <button><span>테스트 다시 하기</span></button>
            <button><span>EL 지원하러 가기</span></button>
        </div>
      </div>
    );
  }
  
  export default Result;