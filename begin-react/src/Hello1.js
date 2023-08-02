// return 안에 작성할 구문이 2줄 이상인 경우 무조건 묶어야 함
// return 문 안에서 자바스크립트 변수 사용하기 : {}
import "./Hello1.css";

function Hello1() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "24px",
    padding: "1rem",
  };

  return (
    <>
      {/* 주석 */}
      <header>
        <h1> 안녕하세요 </h1>
        <div style={style}>{name}</div>
        <div className="gray-box"> </div>
        <div
          style={{
            color: "white",
            background: "black",
          }}
        >
          JSX 스타일 문법{" "}
        </div>
      </header>
    </>
  );
}

export default Hello1;
