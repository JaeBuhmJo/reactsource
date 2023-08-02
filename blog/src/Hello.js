function Hello({ name, color, isSpecial }) {
  console.log(name, color);
  // isSpecial이 true라면 *, false라면 null
  // return 안에서 if문 안됨. 삼항연산자는 가능
  return (
    <h1 style={{ color: color }}>
      {isSpecial ? <b>* </b> : null}
      안녕하세요 {name}
    </h1>
  );
}

Hello.defaultProps = {
  name: "이름없음",
  color: "orange",
};

export default Hello;
