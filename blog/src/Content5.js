import { useState } from "react";
import "./Content.css";
import Modal from "./Modal";

function Content5() {
  let articles = [
    { title: "React 개발환경 설정", regdate: "2023-08-01" },
    { title: "React 기본문법", regdate: "2023-08-02" },
    { title: "React props", regdate: "2023-08-03" },
    { title: "React state", regdate: "2023-08-04" },
  ];

  const [likes, setlikes] = useState([0, 0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [target, settarget] = useState(0);
  const [title, settitle] = useState("");

  const onChange = (e) => {
    //text 입력 값 가져오기
    settitle(e.target.value);
  };

  const [articleList, setarticleList] = useState(articles);
  const onCreate = () => {
    // 작성날짜 구하기
    const todayString = new Date();
    const year = todayString.getFullYear();
    let month = todayString.getMonth() + 1;
    let day = todayString.getDate();

    month = month > 9 ? month : "0" + month;
    day = day > 9 ? day : "0" + day;
    const today = year + "-" + month + "-" + day;

    const article = { title: title, regdate: today };
    setarticleList([...articleList, article]);
    setlikes([...likes, 0]);
    settitle("");
  };

  const onCrease = (e) => {
    // likes 배열에 들어 있는 값을 개별 요소로 꺼내서 새로운 배열 생성
    const newLikes = [...likes];

    articleList.map((article, idx) => {
      if (idx === parseInt(e.target.id)) {
        newLikes[idx] += 1;
      }
    });

    setlikes(newLikes);
  };

  const onDisplayModal = (e) => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }

    settarget(e.target.id);
  };

  return (
    <div>
      <div className="top-nav">
        <h3>My React App</h3>
      </div>
      {articleList.map((article, idx) => {
        return (
          <div className="article" key={idx}>
            <h3 onClick={onDisplayModal} id={idx}>
              {article.title}
            </h3>
            <h3>
              <span onClick={onCrease} id={idx}>
                👍
              </span>
              {likes[idx]}
            </h3>
            <p>{article.regdate}</p>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();

                  setarticleList(articleList.filter((item, index) => idx != index));

                  // let copy = [...articleList];
                  // copy.splice(idx, 1);
                }}
              >
                삭제
              </button>
            </div>
          </div>
        );
      })}
      {/* 새글 작성 */}
      <div className="post">
        <input type="text" onChange={onChange} value={title} />
        <button type="button" onClick={onCreate}>
          등록
        </button>
      </div>

      {/* modal 값이 true 인 경우만 Modal 컴포넌트 보여주기 */}
      {modal ? <Modal choice={articleList[target]} /> : null}
    </div>
  );
}

export default Content5;
