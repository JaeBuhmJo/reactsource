import { useState, memo } from "react";

function Counter2() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const decrease = () => {
    setCounter(counter - 1);
    console.log(counter);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <Child />
    </>
  );
}

let Child = memo(function () {
  console.log("부모가 렌더링 될 때 자식도 렌더링 됨");
  return <div>자식 컴포넌트</div>;
});

export default Counter2;
