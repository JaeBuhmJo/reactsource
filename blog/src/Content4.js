import { useState } from "react";
import "./Content.css";

function Content4() {
  const [likes, setlikes] = useState([0, 0]);

  const onCrease = (e) => {
    // likes 배열에 들어 있는 값을 개별 요소로 꺼내서 새로운 배열 생성
    const newLikes = [...likes];
    newLikes[e.target.id - 1] += 1;
    setlikes(newLikes);
  };

  return (
    <div>
      <div className="top-nav">
        <h3>My React App</h3>
      </div>
      <article>
        <div className="article">
          <h3>
            React 개발환경 설정
            <span onClick={onCrease} id="1">
              👍
            </span>
            {likes[0]}
          </h3>
          <p>2023-08-02</p>
        </div>
      </article>
      <article>
        <div className="article">
          <h3>
            React 기본문법
            <span onClick={onCrease} id="2">
              👍
            </span>
            {likes[1]}
          </h3>
          <p>2023-08-02</p>
        </div>
      </article>
    </div>
  );
}

export default Content4;
