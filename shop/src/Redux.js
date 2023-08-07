import { Button, Container, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeAge } from "./store/userSlice";

export default function Redux() {
  // store.js 사용하기
  let user = useSelector((state) => {
    return state;
  });

  let carts = user.carts;
  const dispatch = useDispatch();

  return (
    <Container className="mt-5">
      <h3>
        {user.user.name} : {user.user.age} 장바구니 -{" "}
        <Button size="sm" onClick={() => dispatch(changeName())}>
          이름변경
        </Button>
        <Button size="sm" onClick={() => dispatch(changeAge(100))}>
          나이변경
        </Button>
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>아이디</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {/* {carts.map((cart, idx) => (
            <tr>
              <td>{cart.id}</td>
              <td>{cart.name}</td>
              <td>{cart.count}</td>
              <td>
                <Button size="sm">변경</Button>
              </td>
            </tr>
          ))} */}
          {/* 소괄호, 중괄호 차이 -> 중괄호로 받으면 return문 필요 */}
          {carts.map((cart, idx) => {
            return (
              <tr key={idx}>
                <td>{cart.id}</td>
                <td>{cart.name}</td>
                <td>{cart.count}</td>
                <td>
                  <Button size="sm">변경</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
