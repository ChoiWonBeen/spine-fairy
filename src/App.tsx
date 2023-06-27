import { useState } from "react";
import "./App.css";
import Stretching from "./assets/teststretching.gif";

const Pharse = ["허리디스크 발생 시 수술비용은 평균...만원", "거북목 가능성이 3% 증가합니다"];

function App() {
  const [isStart, setIsStart] = useState(false);

  return (
    <div>
      {!isStart ? (
        <>
          <h1>지금 스트레칭을 하지 않으면..</h1>
          <h2>당신의 허리는 어떻게 될까요?</h2>
          <h3>스트레칭을 하지 않으면...</h3>
          <ul>
            <li>허리디스크 발생 시 수술비용은 평균...만원</li>
            <li>지팡이를 짚고 살 가능성이 3.6% 증가합니다</li>
            <li>나빠진 시력은 돌아오지도 않는데...</li>
          </ul>
          <div>
            <button onClick={() => setIsStart(true)}>앉아서 스트레칭</button>
            <button>서서 스트레칭</button>
            <button>허리를 망치기</button>
          </div>
        </>
      ) : (
        <img src={Stretching} />
      )}
    </div>
  );
}

export default App;
