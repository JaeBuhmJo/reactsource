function Props(props) {
  // 넘겨받은 값은 읽기 전용
  // props.value += " from App.js";

  // 새로운 변수 선언 후 변경
  let props_value = props.value + " from App.js";
  return <div>{props_value}</div>;
}

export default Props;
