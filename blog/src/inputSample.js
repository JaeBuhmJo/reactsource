import { useState } from "react";

function InputSample() {
  const [input, setinput] = useState("");

  const getInput = (e) => {
    setinput(e.target.value);
  };

  const reset = () => {
    setinput("");
    document.querySelector("input").value = "";
  };

  return (
    <div>
      <input type="text" onChange={getInput} />
      <button onClick={reset}>초기화</button>
      <div>
        <b>값 : {input}</b>
      </div>
    </div>
  );
}

export default InputSample;
