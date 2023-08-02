import { useState } from "react";
import "./Content.css";

function Content3() {
  const [vote1, setvote1] = useState(0);
  const [vote2, setvote2] = useState(0);

  function voteFor1() {
    setvote1(vote1 + 1);
  }
  function voteFor2() {
    setvote2(vote2 + 1);
  }

  return (
    <div>
      <div className="top-nav">
        <h3>My React App</h3>
      </div>
      <article>
        <div className="article">
          <h3>
            React 개발환경 설정
            <span onClick={voteFor1}>👍</span>
            {vote1}
          </h3>
          <p>2023-08-02</p>
        </div>
      </article>
      <article>
        <div className="article">
          <h3>
            React 기본문법
            <span onClick={voteFor2}>👍</span>
            {vote2}
          </h3>
          <p>2023-08-02</p>
        </div>
      </article>
    </div>
  );
}

export default Content3;
