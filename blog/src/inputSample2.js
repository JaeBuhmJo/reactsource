import { useState } from "react";

function InputSample2() {
  const [inputs, setinputs] = useState({ name: "", nickname: "" });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setinputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setinputs({
      name: "",
      nickname: "",
    });
  };

  return (
    <>
      <div>
        <input type="text" name="name" placeholder="이름" onChange={onChange} />
      </div>
      <div>
        <input type="text" name="nickname" placeholder="닉네임" onChange={onChange} />
      </div>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>
          입력값 {name} : {nickname}
        </b>
      </div>
    </>
  );
}

export default InputSample2;
