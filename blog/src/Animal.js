import { useState } from "react";

function Animal() {
  // 상태변화 관리 변수
  // btn : true, false
  // src : "./img/dish2.jpg", "./img/dish5.jpg"
  // button이 클릭되면 button : false, src :

  const [btn, setBtn] = useState(true);
  const [src, setSrc] = useState("../img/dish2.jpg");

  const onToggle = () => {
    setSrc(btn ? "../img/dish5.jpg" : "../img/dish2.jpg");
    setBtn(!btn);
  };

  return (
    <>
      <img src={src} alt="" />
      <div>
        <button onClick={onToggle}>사진 변경</button>
      </div>
    </>
  );
}

export default Animal;
