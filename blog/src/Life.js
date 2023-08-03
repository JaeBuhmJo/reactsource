import { useEffect, useState } from "react";

// useEffect : 컴포넌트 라이프 사이클을 이용한 작업 필요시
// 라이프 사이클 : 1) 컴포넌트 마운트 : 컴포넌트가 처음에 보여지는 시점
//                2) 컴포넌트 언마운트 : 컴포넌트가 제거되는 시점
//                3) 컴포넌트 업데이트 : useState()

function Life() {
  const [count, setcount] = useState(0);
  const [flag, setflag] = useState(true);

  useEffect(() => {
    console.log("마운트 시");

    const timeout = setTimeout(() => {
      alert("안녕");
    }, 1000);

    return () => {
      console.log("언마운트 시");
      clearTimeout(timeout);
    };
  }, [flag, count]); // flag or count 변수 중에서 하나라도 변경이 일어난다면

  return (
    <>
      <div>컴포넌트 라이프 사이클 : {count} </div>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        버튼 클릭
      </button>
    </>
  );
}

export default Life;
